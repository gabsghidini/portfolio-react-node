import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppDataSource from "../data-source";
import { User } from "../entities/users";
import { AppError } from "../errors";

const verifyTokenMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		throw new AppError({ message: "Missing authorization header" }, 401);
	}

	if (token.length <= 32) {
		throw new AppError({ message: "Invalid token" }, 404);
	}

	jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
		if (error) {
			throw new AppError({ message: "Invalid Token" }, 404);
		}

		const user = await AppDataSource.getRepository(User).findOneBy({
			id: String(decoded.sub),
		});

		req.decoded = decoded;
		req.user = user;

		next();
	});
};

export default verifyTokenMiddleware;

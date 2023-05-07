import { Request, Response } from "express";
import { createContactService } from "../../services";

const createContactController = async (req: Request, res: Response) => {
	const userData: any = req.user;
	const contactData = req.body;
	const response = await createContactService(contactData, userData);

	return res.status(201).json(response);
};

export default createContactController;

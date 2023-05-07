import { Request, Response } from "express";
import { getContactsService } from "../../services";

const getContactsController = async (req: Request, res: Response) => {
	const response = await getContactsService(req.user.id);

	return res.status(200).json(response);
};

export default getContactsController;

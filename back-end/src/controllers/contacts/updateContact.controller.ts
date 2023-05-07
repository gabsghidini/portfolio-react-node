import { Request, Response } from "express";
import { updateContactService } from "../../services";

const updateContactController = async (req: Request, res: Response) => {
	const contactData = req.body;
	const contactId = req.params.id;
	const response = await updateContactService(
		contactData,
		contactId,
		req.user.id
	);

	return res.status(201).json(response);
};

export default updateContactController;

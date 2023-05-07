import { Request, Response } from "express";
import { deleteContactService } from "../../services";

const deleteContactController = async (req: Request, res: Response) => {
	const contactId = req.params.id;
	await deleteContactService(contactId, req.user.id);

	return res.status(204).send();
};

export default deleteContactController;

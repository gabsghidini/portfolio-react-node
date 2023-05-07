import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: string, userId: string) => {
	const contactRepo = AppDataSource.getRepository(Contact);

	const [contact] = await contactRepo.find({
		where: { id: contactId, user: { id: userId } },
	});

	if (!contact) {
		throw new AppError("Not found", 404);
	}

	await contactRepo.delete(contactId);
};

export default deleteContactService;

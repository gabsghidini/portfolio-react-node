import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";
import { AppError } from "../../errors";

const updateContactService = async (
	contactData: Contact,
	contactId: string,
	userId: string
) => {
	const contactRepo = AppDataSource.getRepository(Contact);

	const [contact] = await contactRepo.find({
		where: { id: contactId, user: { id: userId } },
	});

	if (!contact) {
		throw new AppError("Not found", 404);
	}

	await contactRepo.update(contactId, { ...contactData });

	const [updatedContact] = await contactRepo.find({
		where: { id: contactId, user: { id: userId } },
	});

	return updatedContact;
};

export default updateContactService;

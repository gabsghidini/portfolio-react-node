import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";

const getContactsService = async (id: string) => {
	const contactRepository = AppDataSource.getRepository(Contact);

	const contact = await contactRepository.find({
		where: { user: { id } },
	});

	return contact;
};

export default getContactsService;

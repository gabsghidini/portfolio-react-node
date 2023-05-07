import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts";
import { User } from "../../entities/users";

const createContactService = async (contactData: Contact, userData: User) => {
	const userRepository = AppDataSource.getRepository(User);

	const [user] = await userRepository.findBy({ id: userData.id });

	const contactRepository = AppDataSource.getRepository(Contact);

	const contact = contactRepository.create({ ...contactData, user });

	await contactRepository.save(contact);

	return contact;
};

export default createContactService;

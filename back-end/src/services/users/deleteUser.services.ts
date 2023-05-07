import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors";

const deleteUserServices = async (id: string): Promise<object> => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: id });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	await userRepository.delete(id);

	return {};
};

export default deleteUserServices;

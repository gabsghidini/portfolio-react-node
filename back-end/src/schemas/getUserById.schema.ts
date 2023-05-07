import * as yup from "yup";

const getUserByIdSchema = yup.object().shape({
	id: yup.string(),
	fullName: yup.string(),
	email: yup.string().email(),
	createdAt: yup.date(),
	updatedAt: yup.date(),
});

export default getUserByIdSchema;

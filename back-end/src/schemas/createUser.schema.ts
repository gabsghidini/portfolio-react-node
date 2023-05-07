import * as yup from "yup";

export const createUserSchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		email: yup.string().required(),
		password: yup.string().required(),
		phone: yup.string().required(),
	})
	.noUnknown(true)
	.strict();

export default createUserSchema;

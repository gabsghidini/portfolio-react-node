import * as yup from "yup";

const returnCreatedUserSchema = yup.object().shape({
	id: yup.string(),
	fullName: yup.string(),
	email: yup.string(),
	createdAt: yup.date(),
	updatedAt: yup.date(),
});

export default returnCreatedUserSchema;

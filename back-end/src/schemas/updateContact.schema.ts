import * as yup from "yup";

const updateContactSchema = yup.object().shape({
	fullName: yup.string(),
	email: yup.string(),
	phone: yup.string(),
});

export default updateContactSchema;

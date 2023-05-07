import * as yup from "yup";

const createContactSchema = yup.object().shape({
	fullName: yup.string().required(),
	email: yup.string().required(),
	phone: yup.string().required(),
});

export default createContactSchema;

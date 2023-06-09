import * as yup from "yup";

const loginUserSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export default loginUserSchema;

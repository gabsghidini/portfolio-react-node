import * as yup from "yup";

interface iRegisterPerson {
	fullName: string;
	email: string;
	password: string;
	phone: string;
}

type iRegisterPersonKeys = keyof iRegisterPerson;

export const registerSchema = yup.object().shape({
	fullName: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Email inválido").required("Email obrigatório"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(8, "Senha deve ter no mínimo 8 caracteres"),
	phone: yup.string().required("Bio obrigatória"),
} as Record<iRegisterPersonKeys, any>);

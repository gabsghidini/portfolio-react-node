import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
/* Styles */
import * as S from "./styles";
/* Toasts */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Form */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
/* API */
import { registerSchema } from "../../Validations/registerValidation";

const Register = () => {
	const { userRegister } = useContext(UserContext);
	/* Forms */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(registerSchema),
	});

	const onSubmitFunction = handleSubmit(userRegister);

	return (
		<S.Wrapper>
			<h1>Clients Hub</h1>
			<S.Form onSubmit={onSubmitFunction}>
				<>
					<S.Title>Registro</S.Title>
					<label>Nome completo</label>
					<S.Input
						type="text"
						placeholder="Eevee Saura Rex"
						{...register("fullName")}
					/>
					{errors.fullName?.message}
					<label>Email</label>
					<S.Input
						type="text"
						placeholder="eevee@mail.com"
						{...register("email")}
					/>
					{errors.email?.message}
					<label>Telefone</label>
					<S.Input
						type="text"
						placeholder="12987654321"
						{...register("phone")}
					/>
					{errors.phone?.message}
					<label>Senha</label>
					<S.Input
						type="password"
						placeholder="S3nh4 Sup3r S3cr3t4"
						{...register("password")}
					/>
					{errors.password?.message}
					<label>Confirme sua senha</label>
					<S.Input
						type="password"
						placeholder="S3nh4 Sup3r S3cr3t4"
					/>
					<S.LoginButton type="submit">Cadastrar</S.LoginButton>
					<S.HeadlineBoldSmall className="bold">
						Já possui uma conta?
					</S.HeadlineBoldSmall>
					<S.RegisterButton to="/">Faça Login</S.RegisterButton>
				</>
			</S.Form>
			<ToastContainer />
		</S.Wrapper>
	);
};

export default Register;

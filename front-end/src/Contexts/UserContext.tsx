import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../Services/API";
import * as i from "./types";

export const UserContext = createContext<i.UserProviderData>(
	{} as i.UserProviderData
);

const UserProvider = ({ children }: i.UserProviderProps) => {
	const [user, setUser] = useState<i.User>({} as i.User);
	const [token, setToken] = useState<string>();
	const [isUpdating, setIsUpdating] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	useEffect(() => {
		async function updateUser() {
			const token = localStorage.getItem("@TOKEN");
			if (token) {
				handleRedirect("dashboard");
			}
		}
		updateUser();
	}, []);

	/* Toasts functions */
	const showErrorToast = (error: string) => {
		toast.error(`${error}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const showSuccessToast = (message: string) => {
		toast.success(`${message}`, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	/* Router Dom functions */
	const handleRedirect = (redirectTo: string) => {
		navigate(`/${redirectTo}`);
	};

	/* API */
	async function userLogin(user: i.LoginUser) {
		try {
			const response: i.LoginUserResponse = await API.post(
				"/login",
				user
			);

			localStorage.clear();

			const data = response.data;

			setToken(data.token);

			localStorage.setItem("@TOKEN", data.token);
			localStorage.setItem("@User", JSON.stringify(data.user));
			localStorage.setItem("@UserID", data.user.id);
			localStorage.setItem("@Techs", JSON.stringify(data.user.techs));

			showSuccessToast("Login realizado com sucesso!");

			handleRedirect("dashboard");
		} catch (error) {
			const err = error as i.Error;
			console.error(err);
			showErrorToast(
				"Erro interno do servidor, tente novamente mais tarde."
			);
		}
	}

	async function userRegister(user: any) {
		try {
			const response: any = await API.post("/users", user);
			localStorage.clear();

			if (response) {
				showSuccessToast(
					"Cadastro realizado com sucesso! Você já pode fazer login."
				);
			}
		} catch (error) {
			const err = error as i.Error;
			console.error(err);

			showErrorToast(
				"Erro ao cadastrar usuário: verifique se os dados estão preenchidos corretamente."
			);
		}
	}

	return (
		<UserContext.Provider
			value={{
				user,
				showErrorToast,
				showSuccessToast,
				handleRedirect,
				userLogin,
				userRegister,
				isUpdating,
				loading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

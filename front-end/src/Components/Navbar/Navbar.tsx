import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Navbar = () => {
	const navigate = useNavigate();

	const returnToLogin = () => {
		return navigate("/");
	};
	return (
		<S.NavContainer>
			<S.Nav>
				<h1>Clients Hub</h1>
				<S.Logout
					onClick={() => {
						localStorage.clear();
						returnToLogin();
					}}
				>
					Logout
				</S.Logout>
			</S.Nav>
		</S.NavContainer>
	);
};

export default Navbar;

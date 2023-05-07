import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
	return (
		<Container>
			<Navbar />
			<Header />
			<ToastContainer />
		</Container>
	);
};

export default Dashboard;

/* Imported Routes */
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";

const HubRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route element={<ProtectedRoutes />}></Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default HubRoutes;

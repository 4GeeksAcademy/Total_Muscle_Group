import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { Classes } from "./pages/Classes";
import { ClassDetail } from "./pages/ClassDetail";
import { Profile } from "./pages/Profile";
import { Admin } from "./pages/Admin";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/onboarding" element={<Onboarding />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/classes" element={<Classes />} />
			<Route path="/classes/:classId" element={<ClassDetail />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/single/:theId" element={<Single />} />
			<Route path="/demo" element={<Demo />} />
		</Route>
	)
);
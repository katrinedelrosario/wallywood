import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/home/home";
import { NotFound } from "../../../pages/notfound/notfound";
import {Posters, PosterDetails, PosterList } from "../../../pages/posters/posters";


const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PosterList />} />
				<Route path=":slug/:id" element={<PosterDetails />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRouter;
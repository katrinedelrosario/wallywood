import { Routes, Route } from 'react-router-dom';
import { PosterDetails, PosterList, Posters } from '../../../pages/posters/posters';
import Home from '../../../pages/home/home'

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PosterList />} />
				<Route path=":slug/:poster" element={<PosterDetails />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
import { Routes, Route } from 'react-router-dom';
import { PosterDetails, PosterList, Posters } from '../../../pages/posters/posters';
import Home from '../../../pages/home/home'
import About from '../../../pages/about/about';
import NotFound from '../../../pages/notfound/notfound';
import Login from '../../../pages/login/login';
import Contact from '../../../pages/contact/contact';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PosterList />} />
				<Route path=":slug/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/cart" element />
			<Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRouter;
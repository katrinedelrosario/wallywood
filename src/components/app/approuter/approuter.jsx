import { Routes, Route } from 'react-router-dom';
import { Posters } from '../../pages/posters/posters';
import Home from '../../pages/home/home'
import About from '../../pages/about/about';
import NotFound from '../../pages/notfound/notfound';
import Login from '../../pages/login/login';
import Contact from '../../pages/contact/contact';
import { PostersDetails } from '../../pages/posters/postersdata/postersdetails';
import { PostersList } from '../../pages/posters/postersdata/posterslist';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PostersList />} />
				<Route path=":slug/:poster" element={<PostersDetails />} />
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
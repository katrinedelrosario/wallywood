import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/home/home";
import Kontakt from "../../../pages/kontakt/kontakt";
import Login from "../../../pages/login/login";
import { NotFound } from "../../../pages/notfound/notfound";
import OmOs from "../../../pages/om_os/om_os";
import Plakater from "../../../pages/plakater/plakater";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/plakater' element={<Plakater/>} />
            <Route path='/om_os' element={<OmOs/>}/>
            <Route path='/kontakt' element={<Kontakt/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRouter 
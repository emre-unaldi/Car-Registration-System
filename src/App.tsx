import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomeLayout from "./pages/Home/HomeLayout.tsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Home from "./pages/Home";
//import ChangePassword from "./pages/ChangePassword";
import NotFoundPage from "./pages/NotFoundPage";
import HomeContent from "./components/HomeContent";
import LayoutTheme from "./components/LayoutTheme";
import ChangePasswordContent from "./components/ChangePasswordContent";
import AuthPrivate from "./components/PrivateRoutes/AuthPrivate.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomeLayout/>}>
                <Route index={true} element={<Login/>}/>
                <Route path={"register"} element={<Register/>}/>
                <Route path={"home"} element={
                    <AuthPrivate>
                        <LayoutTheme>
                            <HomeContent/>
                        </LayoutTheme>
                    </AuthPrivate>
                }/>
                <Route path={"changePassword"} element={
                    <AuthPrivate>
                        <LayoutTheme>
                            <ChangePasswordContent/>
                        </LayoutTheme>
                    </AuthPrivate>
                }/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
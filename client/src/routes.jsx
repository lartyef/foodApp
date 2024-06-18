import {createBrowserRouter} from "react-router-dom"
// import LandingPage from "./module/pages/landingPage"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import LandingPage from "./pages/landingPage/index"
import Footer from "./module/component/footer"



export const router = createBrowserRouter([
    {
        // path: "/",
        // element: <LandingPage/>
        path: "/",
        element: <Login/>,

    },

    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/landingpage",
        element: <LandingPage/>
    },
    {
        path: "/footer",
        element: <Footer/>
    },

])
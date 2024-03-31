import {Navigate, createBrowserRouter} from "react-router-dom";
import {Login} from './layouts/Login/Login';
import {Default} from './layouts/Default/Default.tsx';
import {Step1} from './components/Step1/Step1';
import {Step2} from './components/Step2/Step2';
import {Step3} from './components/Step3/Step3';
import {Home} from "./components/Home/Home";
import {Faq} from "./components/Faq/Faq";

export const routes = createBrowserRouter([
        {
            path: "", element: <Default/>, children: [
                {path: "", element: <Home/>},
                {path: "/faq", element: <Faq/>},
                {
                    path: "/setup",
                    children: [
                        {path: "", element: <Navigate to='/setup/sources'/>},
                        {path: "sources", element: <Step1/>},
                        {path: "time", element: <Step2/>},
                        {path: "target", element: <Step3/>},
                    ]
                }
            ]
        },
        {
            path: "/auth", element: <Login/>
        },
    ]
)

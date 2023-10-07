import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import PrivateRoutes from './PrvateRoutes/PrivateRoutes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/gallery",
                element: <div></div>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/service/:id",
                element: <PrivateRoutes><ServiceDetails /></PrivateRoutes>,
                loader: () => fetch('../service.json')
            }
        ]
    }
])

export default router;
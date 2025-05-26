import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Detail',
        element: <Detail />
    }

]);

const myRoutes = () => <RouterProvider router={router} />
   

export default myRoutes;
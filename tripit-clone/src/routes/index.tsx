import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/web" replace />
    },
    {
        path: "/web",
        element: (
        <HomePage />
        )
    },
    {
        path: "/account/create",
        element: <SignUpPage />
    },
    {
        path:"/account/login",
        element:<LoginPage/>
    },
    {
        path: "*",
        element: <ErrorPage />
    },
];

const router = createBrowserRouter(routes);

export default router;

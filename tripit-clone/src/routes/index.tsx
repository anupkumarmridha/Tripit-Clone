import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

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
        path: "*",
        element: <ErrorPage />
    }
];

const router = createBrowserRouter(routes);

export default router;

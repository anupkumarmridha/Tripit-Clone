import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProtectedRoute from '../Hoc/ProtectedRoute';
import Onboarding from '../components/Onboarding/Onboarding';
import MainPage from '../pages/MainPage/MainPage';

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
        path: "/app/onboarding",
        element: <ProtectedRoute><Onboarding /></ProtectedRoute>
    },
    {
        path: "/app/main",
        element: <ProtectedRoute><MainPage /></ProtectedRoute>
    },
    {
        path: "*",
        element: <ErrorPage />
    },
];

const router = createBrowserRouter(routes);

export default router;

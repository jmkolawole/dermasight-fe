import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import { Layout } from './layouts/Layout/Layout';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';
import Logout from './pages/Auth/Logout/Logout';
import Analysis from './pages/Analysis/Analysis';

export const router = createBrowserRouter([
  // UNPROTECTED PAGES
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  // PROTECTED PAGES
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/analysis',
        element: <Analysis />,
      },
      {
        path: '/logout',
        element: <Logout />,
      }
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../Root';
// import ProtectedRoute from './ProtectedRoute';
// import RedirectBasedOnRole from './RedirectBasedOnRole';
import { AuthLayout } from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';


export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      /// Dashboard Routes
      // {
      //   index:true,
      //   element: <RedirectBasedOnRole/>,
      // },
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            path: 'inicio',
            element: (
                <Home/>
            ),
          },
          {
            path: 'nosotros',
            element: (
                <About/>
            ),
          },
        ]
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <></>
          }
        ]

      },

    ],
  },
] );
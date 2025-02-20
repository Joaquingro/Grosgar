
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Root = () => {

  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="/inicio" />;
  }
  
  return (
    <main>
      <Outlet />
      <ToastContainer position='bottom-center' />
    </main>
  )
}
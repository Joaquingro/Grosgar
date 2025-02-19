// ProtectedRoute.tsx
import RedirectBasedOnRole from './RedirectBasedOnRole'; 
import PropTypes from "prop-types";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const userRole = localStorage.getItem('role'); 
  if (!allowedRoles.includes(userRole)) {
    return <RedirectBasedOnRole />;
  }

  return <>{children}</>; 
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {

  allowedRoles: PropTypes.object,
  children: PropTypes.ReactNode,
};
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectBasedOnRole = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role'); 

  useEffect(() => {
    switch (role) {
      case 'conciliacion':
      case 'CONCILIACION':
        navigate('/');
        break;
      case 'SYSADMIN':
      case 'admin':
        navigate('/');
        break;
      default:
        navigate('/inicio'); 
    }
  }, [navigate, role]); 

  return null; 
};

export default RedirectBasedOnRole;

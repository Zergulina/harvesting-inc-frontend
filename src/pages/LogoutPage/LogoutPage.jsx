import React from 'react';
import { useAuth } from '../../app/routing/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setToken();
      navigate("/login", { replace: true });
    };
  
    setTimeout(() => {
      handleLogout();
    }, 100);
  
    return (
        <>Logout Page</>
    );
};

export default LogoutPage;
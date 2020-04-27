import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../../actions/auth';

const Admin = ({ children }) => {
  useEffect(() => {
    const authenticadeUser = isAuth();
    if (!authenticadeUser) {
      Router.push('/signin');
    } else if (authenticadeUser.role !== 1) {
      Router.push('/');
    }
  }, []);

  return <>{children}</>;
};

export default Admin;

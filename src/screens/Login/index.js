import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Link text={'Ingresar'} to={'/products'}  />
    </div>
  );
};

export default Login;
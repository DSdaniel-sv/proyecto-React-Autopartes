import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Ingreso from '../Login/Ingreso.css' ;

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='btnLogin' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
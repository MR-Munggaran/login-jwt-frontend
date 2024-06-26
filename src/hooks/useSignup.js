import React, { useState } from "react";
import {message} from 'antd'
import { useAuth } from "../context/AuthContext.jsx";

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords are no the same");
    }
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      const data = await res.json()
      if(res.status === 201){
        message.success(data.message)
        login(data.token, data.user)
      }else if(res.status === 400) {
        setError(data.message)
      }else{
        message.error('registration failed')
      }
    } catch (error) {
        message.error(error)
    }finally{
        setLoading(false)
    }
  };
  return {loading, error, registerUser};
};

export default useSignup;

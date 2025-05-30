import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import React from 'react';


const FormLogin = () =>{
  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("email", e.currentTarget.email?.value);
    localStorage.setItem("password", e.currentTarget.password?.value);
    window.location.href = "/products";
  }
  return (
    <form onSubmit={handleLogin}>
      <InputForm type="email" name="email" placeholder="example@email.com">Email</InputForm>
      <InputForm type="password" name="password" placeholder="***">Password</InputForm>
      <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  )
}

export default FormLogin
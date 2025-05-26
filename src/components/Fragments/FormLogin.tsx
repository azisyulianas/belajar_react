import { Link } from "react-router-dom"
import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"


const FormLogin = () =>{
  return (
    <form action="">
      <InputForm type="email" name="email" placeholder="example@email.com">Email</InputForm>
      <InputForm type="password" name="password" placeholder="***">Password</InputForm>
      <Button classname="bg-blue-600 w-full">Login</Button>
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </form>
  )
}

export default FormLogin
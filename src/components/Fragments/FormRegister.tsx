import { Link } from "react-router-dom"
import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"


const FormRegister = () =>{
  return (
    <form action="">
      <InputForm type="text" name="fullname" placeholder="Ayam Goreng">Fullname</InputForm>
      <InputForm type="email" name="email" placeholder="example@email.com">Email</InputForm>
      <InputForm type="password" name="password" placeholder="***">Password</InputForm>
      <InputForm type="password" name="password-2" placeholder="***">Comfirm Password</InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
      <p className="text-sm mt-5 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    </form>
  )
}

export default FormRegister
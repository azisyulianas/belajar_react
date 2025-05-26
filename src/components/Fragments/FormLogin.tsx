import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"


const FormLogin = () =>{
  return (
    <form action="">
      <InputForm type="email" name="email" placeholder="example@email.com">Email</InputForm>
      <InputForm type="password" name="password" placeholder="***">Password</InputForm>
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  )
}

export default FormLogin
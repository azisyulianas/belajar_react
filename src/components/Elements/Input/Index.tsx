import Input from "./Input"
import Label from "./Label"

type props = {
  type:string
  name:string
  placeholder:string
  children:string
}

const InputForm = (props:props) =>{
  const {type, name, placeholder, children} = props
  return(
    <div className="mb-6">
      <Label htmlfor={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm
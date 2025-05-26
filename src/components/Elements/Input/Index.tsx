import Input from "./Input"
import Label from "./Label"


const InputForm = (props:any) =>{
  const {type, name, placeholder, children} = props
  return(
    <div className="mb-6">
      <Label htmlfor={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm
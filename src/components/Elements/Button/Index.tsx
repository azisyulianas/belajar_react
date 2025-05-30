type props={
  children:string
  classname?:string
  type?: "button" | "submit" | "reset"
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props:props) => {
  const { children, classname = "bg-black", type, onclick= () => {} } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      onClick={onclick}
      type={type}>
      {children}
    </button>
  )
}

export default Button
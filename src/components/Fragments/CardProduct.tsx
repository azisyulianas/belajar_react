import Button from "../Elements/Button/Index"

const CardPorduct = (props:{children:React.ReactNode}) => {
  const { children="" } = props
  return (
    <div className="w-full my-2 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = (props:{image:string,alt:string}) => {
  const {image, alt} = props
  return (
    <a href="#">
      <img 
        src={image} 
        alt={alt}
        className="p-8 rounded-t-lg"
      />
    </a>
  )
}

const Body = (props:{children:React.ReactNode,title:string}) => {
  const { children, title } = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white">
          {children}
        </p>
      </a>
    </div>
  )
}
interface CardProductFooterProps {
 weapon:string;
 addToFav:(event: React.MouseEvent<HTMLButtonElement>) => void;
 is_like:boolean;
 removeFromFav:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Footer = (props:CardProductFooterProps) =>{
  const {weapon, addToFav, removeFromFav, is_like} = props
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {weapon}
      </span>
      {
        !is_like?(
          <Button
          classname="bg-red-700" 
          onclick={addToFav}>
            Like
        </Button>
        ):(
        <Button
          classname="bg-red-700" 
          onclick={removeFromFav}>
            Dislike
        </Button>
        )
      }
    </div>
  )
}

CardPorduct.Header = Header;
CardPorduct.Body = Body;
CardPorduct.Footer = Footer;

export default CardPorduct
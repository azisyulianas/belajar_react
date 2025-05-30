import CardPorduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button/Index"
import { useState, Fragment, useEffect, useRef } from "react"
import { getListCharacter, type Character } from "../services/genshin.list";


const ProductsPage = () =>{
  const [fav, setFav] = useState<number[]>([])
  const [totalFav, setTotalFav] = useState(0)
  const [characters, setCharacters] = useState<Character[]>([])
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(()=>{
    getListCharacter((data)=>{
      setCharacters(data)
    })
  },[])

  useEffect(()=>{
    const favChar = localStorage.getItem("favChar");
    setFav(favChar ? JSON.parse(favChar) : []);
    setIsInitialized(true);
  }, [])

  useEffect(()=>{
    if (!isInitialized) return;
    setTotalFav(fav.length)
    localStorage.setItem("favChar",JSON.stringify(fav))
  },[fav, isInitialized])

  const email = localStorage.getItem("email")

  const handleLogout = () =>{
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  }

  const handleLike = (id: number) => {
    setFav([...fav,id])
  }

  const handleRemoveLike = (id: number) => {
    setFav([
      ...fav.filter(char=>{return char !== id})
    ])
  }

  const listFavRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(()=>{
    if (!isInitialized) return;
    if (listFavRef.current){
      listFavRef.current.style.display = fav.length > 0 ? "block" : "none";
    }
  },[fav,isInitialized])
  
  return(
    <Fragment>
      <div className="flex justify-end bg-blue-500 text-white px-10 h-10 items-center">
        {email}
        <Button classname="ml-5 bg-red-700 rounded-md" onclick={handleLogout} type="button">Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {characters.length>0 && characters.map((character)=>
            (<CardPorduct key={character.id}>
              <CardPorduct.Header alt={character.name}
                image={character.images.mihoyo_icon} />
              <CardPorduct.Body title={character.name}>
                {character.description}
              </CardPorduct.Body>
              <CardPorduct.Footer 
                weapon={character.weaponText} 
                addToFav={()=>handleLike(character.id)}
                removeFromFav={()=>handleRemoveLike(character.id)}
                is_like={fav.includes(character.id)}
              />
            </CardPorduct>)
          )}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Favorite</h1>
          <h1 className="text-2xl font-bold text-blue-300" ref={listFavRef}>Total Fav Character{" "}: <span>{totalFav}</span></h1>
          <ul>
            {fav.map((item)=>{
              const character = characters.find((char)=> char.id === item);
              if (character){
                return (
                  <li key={item}>{character?.name}</li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
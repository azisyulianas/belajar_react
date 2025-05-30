import CardPorduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button/Index"
import { useState, Fragment } from "react"

interface Character {
  id:number;
  name:string;
  image:string;
  deskription:string;
  weapon:string;
}

const characters = [
  {
    id:1,
    name:"Kamisato Ayaka",
    image:"https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kamisato%2520Ayaka_icon.png",
    deskription:"Putri dari Klan Kamisato di Yashiro Commission. Bermartabat dan elegan, cerdas dan tangguh.",
    weapon:"Sword"
  },
  {
    id:2,
    name:"Hu Tao",
    image:"https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Hu%2520Tao_icon.png",
    deskription:"Master ke-77 Wangsheng Funeral Parlor. Dia mengambil alih bisnis ini di umur yang cukup muda.",
    weapon:"Polearm"
  },
  {
    id:3,
    name:"Furina",
    image:"https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/07/8459597/263e5ea0784d182b393f67a7e24146a5_1557025989132645732.png?x-oss-process=image%2Fformat%2Cwebp",
    deskription:"Pusat perhatian utama panggung pengadilan, hingga tepuk-tangan di penghujung acara terdengar.",
    weapon:"Sword"
  },
]

const ProductsPage = () =>{
  const [fav, setFav] = useState<Character[]>([])

 
  const email = localStorage.getItem("email")
  const handleLogout = () =>{
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  }

  const handleLike = (character: Character) => {
    setFav([
      ...fav,
      character
    ])
  }

  const handleRemoveLike = (id: number) => {
    setFav([
      ...fav.filter(char=>{return char.id !== id})
    ])
  }

  return(
    <Fragment>
      <div className="flex justify-end bg-blue-500 text-white px-10 h-10 items-center">
        {email}
        <Button classname="ml-5 bg-red-700 rounded-md" onclick={handleLogout} type="button">Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {characters.map((character)=>
            <CardPorduct key={character.id}>
              <CardPorduct.Header alt={character.name}
                image={character.image} />
              <CardPorduct.Body title={character.name}>
                {character.deskription}
              </CardPorduct.Body>
              <CardPorduct.Footer 
                weapon={character.weapon} 
                addToFav={()=>handleLike(character)}
                removeFromFav={()=>handleRemoveLike(character.id)}
                is_like={fav.map(item =>{return item.id}).includes(character.id)}
              />
            </CardPorduct>
          )}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Favorite</h1>
          <ul>
            {fav.map((item)=>(
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
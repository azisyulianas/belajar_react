import CardPorduct from "../components/Fragments/CardProduct"

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
  return(
    <div className="flex justify-center py-5">
    {characters.map((character)=>
      <CardPorduct>
        <CardPorduct.Header alt={character.name}
          image={character.image} />
        <CardPorduct.Body title={character.name}>
          {character.deskription}
        </CardPorduct.Body>
        <CardPorduct.Footer weapon={character.weapon}/>
      </CardPorduct>
    )}
    </div>
  )
}

export default ProductsPage
import CardPorduct from "../components/Fragments/CardProduct"

const ProductsPage = () =>{
  return(
    <div className="flex justify-center py-5">
      <CardPorduct>
        <CardPorduct.Header alt="Kamisato Ayaka"
          image="https://img-os-static.hoyolab.com/communityWeb/upload/dbb893c26e20822aabd876a52361fffa.png" />
        <CardPorduct.Body title="Ayaka">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, impedit?
        </CardPorduct.Body>
        <CardPorduct.Footer weapon="Sword"/>
      </CardPorduct>
      <CardPorduct>
        <CardPorduct.Header alt="Kamisato Ayaka"
          image="https://img-os-static.hoyolab.com/communityWeb/upload/dbb893c26e20822aabd876a52361fffa.png" />
        <CardPorduct.Body title="Ayaka">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, impedit?
        </CardPorduct.Body>
        <CardPorduct.Footer weapon="Sword"/>
      </CardPorduct>
    </div>
  )
}

export default ProductsPage
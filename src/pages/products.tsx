import Button from "../components/Elements/Button/Index"

const ProductsPage = () =>{
  return(
    <div className="flex justify-center py-5">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="#">
          <img 
            src="https://img-os-static.hoyolab.com/communityWeb/upload/dbb893c26e20822aabd876a52361fffa.png" 
            alt="Kamisato Ayaka"
            className="p-8 rounded-t-lg"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              Kamisato Ayaka
            </h5>
            <p className="text-m text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam?
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-xl font-bold text-white">
            Sword
          </span>
          <Button classname="bg-red-700">Like</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
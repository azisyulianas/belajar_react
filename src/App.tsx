import NavBar from "./layouts/NavBar"

function App() {
  return (
    <>
      <NavBar activeLink="sapi"/>
      <h1 className='font-bold text-2xl mb-4'>
        Tailwind CSS Utility-First Fundamental
      </h1>
      <div className="max-w-sm w-full py-6 bg-white shadow-lg
        rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">
            Interactive Button Example
          </h2>
          <button className="bg-blue-500 text-white py-2 px-4
            rounded-lg outline-none hover:ring-2 ring-indigo-900 hover:bg-blue-800">
              Hover & Focus Me
          </button>
          <div className="text-sm">
            <p className="hover:text-blue-800 mt-2">
              Hover: Darker Blue
            </p>
            <p className="mt-1 text-blue-300">
              Focus Light Blue Ring
            </p>
          </div>
      </div>
    </>
  )
}

export default App

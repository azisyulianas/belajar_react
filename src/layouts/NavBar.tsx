const NavBar = ({activeLink="ayam"}:{activeLink:string}) =>{
  return( 
    <nav className="bg-white py-3 justify-items-end">
      <ul className="gap-1.5 flex-row flex">
        <li><a className={`text-blue-400 ${activeLink=='ayam'?'font-bold':''} hover:text-blue-500`} href="#">Ayam</a></li>
        <li><a className={`text-blue-400 ${activeLink=='sapi'?'font-bold':''} hover:text-blue-500`} href="#">Sapi</a></li>
        <li><a className={`text-blue-400 ${activeLink=='kambing'?'font-bold':''} hover:text-blue-500`} href="#">kambing</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
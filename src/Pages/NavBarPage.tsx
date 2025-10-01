
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { useState } from 'react';

function NavBarPage() {
  const [close,setclose]=useState(true)
  return (
    <div className="relative">
  <Header close={close} setclose={setclose}/>
 < NavBar close={close} setclose={setclose}/>
 
</div>
  )
}

export default NavBarPage
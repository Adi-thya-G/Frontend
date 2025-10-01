import React, {  type ReactNode } from 'react'
import { NavLink, } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { IoBarChart, IoDocumentsOutline } from "react-icons/io5";
import { FiMessageSquare, FiKey, FiDatabase, FiUsers, FiSettings, FiHelpCircle, FiCreditCard } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";


interface NavItem {
  title: string;
  icon: ReactNode // can be emoji OR a React component if you use react-icons
  path: string;
}

interface Props {
  close:boolean,
  setclose:React.Dispatch<React.SetStateAction<boolean>>
}
function NavBar({close,setclose}:Props) {

 const navItems: NavItem[] = [
  { title: "Dashboard", icon: <IoBarChart size={18} />, path: "dashboard" },
  { title: "Playground", icon: <FiMessageSquare size={18} />, path: "playground" },
  { title: "Documents", icon: <IoDocumentsOutline size={18} />, path: "documents" },
  { title: "Knowledge Base", icon: <LuBrain size={18} />, path: "knowledge-base" },
  { title: "API Keys", icon: <FiKey size={18} />, path: "api-keys" },
  { title: "Analytics", icon: <FiDatabase size={18} />, path: "analytics" },
   { title: "Team", icon: <FiUsers size={18} />, path: "/team", },
  { title: "Billing", icon: <FiCreditCard size={18} />, path: "/billing",  },
  { title: "Settings", icon: <FiSettings size={18} />, path: "/settings", },
  { title: "Help & Support", icon: <FiHelpCircle size={18} />, path: "/support", },
  
];

  return (
   <aside className={`
    
   w-64 rounded-r-md min-h-[600px] h-screen bg-white shadow-md shadow-gray-300 z-50 absolute top-0 ${close&&"max-xl:hidden"}`}>
    <nav className='p-2 w-full '>
     <div className='w-full py-5 flex justify-between place-items-center p-2 '>
  <h4 className='font-semibold text-blue-600 font-serif text-[17px] '>RecallAI</h4>
   <button className='w-7 h-7  justify-center place-items-center rounded-full hover:bg-gray-200 p-1 hidden max-lg:flex' onClick={()=>setclose(true)}><IoClose size={24}/></button>
     </div>
      <div>
        <ul className='flex flex-col gap-4'>
         
    {
      navItems.map((element,index)=>(
         <li className='w-full p-2  hover:bg-blue-400 rounded-md hover:text-white cursor-pointer' key={index}>
        <NavLink
        to={element.path}
        className={({ isActive }:any) =>`
        flex gap-2 px-2 place-items-center
        ${isActive&& "text-blue-600 font-semibold border-l-4 border-blue-600 pl-2"}
        `
            
          
        } 
      >
        {element.icon}
       {element.title}
      </NavLink>
       </li>
      ))
    }

         
          
        </ul>
      </div>
    </nav>
   </aside>
  )
}

export default NavBar
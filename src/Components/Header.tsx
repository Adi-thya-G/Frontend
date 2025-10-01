import React, { useState, } from 'react'
import { MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import  useDashboardStore from '../store/Dashboard'
interface Props{
  close:boolean,
  setclose:React.Dispatch<React.SetStateAction<boolean>>
}
function Header({setclose}:Props) {
  const openProjectModel= useDashboardStore((state)=>state.openCreateProjectModal)
 
  const [ProjectClose,setProjectClose]=useState(true)
  return (
  <nav className='w-full h-12 bg-white shadow-md shadow-gray-300 flex justify-between relative'>
    <div className='w-full h-full flex place-items-center px-3'>
      <button onClick={()=>setclose(false)} className='cursor-pointer'>
        <MdMenu size={21}/>
      </button>
    </div>
    <div className='w-full h-full flex place-items-center justify-end px-5'>
      <button className='p-2 sm:px-6 cursor-pointer rounded-md bg-sky-500 text-white font-sans font-semibold border-2 text-[13px] sm:text-[14px] ' 
      onClick={()=>setProjectClose((pre)=>!pre)}> Select Project</button>

    </div>
    <div className={`absolute top-[52px] flex flex-col justify-start  w-[280px] rounded-md z-50 min-h-max bg-white shadow-md shadow-neutral-500 right-2 p-4 ${ProjectClose&& "hidden"} `}>
      <h2 className='font-bold font-sans text-gray-500'>Projects</h2>
       <nav className='p-2 h-full flex flex-col gap-2 '>
        <ul className='px-2 flex flex-col gap-2 min-h-32 max-h-max'>
          {
            [{}].map((ele,index)=>(
              <li className='w-full rounded-md  hover:bg-blue-400  cursor-pointer font-serif  flex justify-start px-2 p-2 text-neutral-600 hover:text-neutral-100' key={index} onClick={()=>{
            setProjectClose((pre)=>!pre)
          }}>
            {ele&&"ProjectA"}
          </li>
            ))
          }
          
        </ul>
         <hr className='border-1 border-gray-400 rounded-md'/>
        <div className='h-full flex-1 flex flex-col justify-end p-2 '>
         
          
          <button className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg cursor-pointer flex place-items-center justify-center  text-[15px]  gap-2 font-serif' onClick={()=>{
            setProjectClose(true)
            openProjectModel()
          }}><span><FaPlus size={14}/></span > Create Projects</button>

        </div>
       </nav>
    </div>
    <div>

    </div>
  </nav>
  )
}

export default Header
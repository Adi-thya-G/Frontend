import { useEffect, useState } from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSpinner} from "react-icons/fa";
import { GetAllDocument,DeleteDocument } from '../utilis/api';
import { IoClose } from "react-icons/io5";
function Documents() {

  const thead=["Document Name","Document Type ","Document Size","Document Date","Status","Actions"]

const [response,setresponse]=useState<Array<Record<string,any>>>([])
const [preview,setpreview]=useState(null)
useEffect(()=>{
 const call=async()=>{
  const respo=await GetAllDocument()
  setresponse(respo?.data?.data)
}
 call()
 console.log(response)
},[])

  return (
    <div className='p-2 lg:px-6 w-full  box-border relative flex flex-col'>
    {preview&&<div className='fixed  w-full  xl:left-60 xl:w-[55%] 2xl:w-[84%] p-2 rounded-md h-[90vh] top-8 lg:top-2 z-50 bg-white shadow-md shadow-gray-600'>
      <div className='flex justify-end'>
       <button className='cursor-pointer ' onClick={()=>setpreview(null)}> < IoClose size={24}/></button>
      </div>
     <iframe
  src={`https://docs.google.com/gview?url=${preview}&embedded=true`}  // pdfUrl = Cloudinary secure_url
  width="100%"
  height="95%"
  title="PDF Preview"
/>

      </div>}
   <div className='lg:px-6'>
        <h4 className='w-full text-[19px] flex text-gray-700 font-semibold p-3'>Document Details
          <span></span>
        </h4>
   <p className="px-3 pb-3 text-gray-600 text-[13px] md:text-[15px] leading-relaxed">
  This document contains an overview of <span className="font-medium">Artificial Intelligence (AI)</span>, 
  including its core applications such as natural language processing, computer vision, recommendation 
  systems, and autonomous vehicles. It was uploaded by the <span className="font-medium">Research Team</span> 
  on <span className="font-medium">September 20, 2025</span>, and is currently available for retrieval 
  in the <span className="italic">RAG system</span> for a Kapa AI–like knowledge platform.
</p>
   </div>
   <div className='w-full px-2 md:px-4 lg:px-6 p-2'>
    
<div className='w-full relative flex place-items-center py-4 lg:px-6'>
 <span className='absolute left-2 lg:left-8'> < FiSearch className='text-gray-600'/></span>
  <input type="search" placeholder="Search documents..."
 className='w-full border-2 pl-8 border-gray-600 p-2 rounded-lg outline-none' />
</div>
<div className='w-full p-1 lg:p-3 lg:px-5'>
  <label
  htmlFor="fileUpload"
  className="w-full h-32 lg:h-36 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500"
>
  <IoDocumentText className=''size={25} />
  <p className='text-sky-600' >Upload document</p>
</label>
<input type="file" name="" id="fileUpload" className='hidden' />
</div>

<div className="w-full lg:py-5  overflow-x-auto overflow-y-auto h-[350px] p-1 scrollbar">
  <table className="w-full border-collapse">
    <thead className="bg-gray-100 ">
      <tr className="border-b border-gray-400">
        {thead.map((ele, index) => (
          <th
            key={index}
            className="py-3 px-4 text-left whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              {ele}
              {ele=="Actions"||<TiArrowSortedDown size={16} className='cursor-pointer' />}
            </div>
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {response?.map((ele, index) => (
     
        <tr key={index} className="hover:bg-gray-100">
          <td className="py-2 px-4">{ele?.file_name}</td>
          <td className="py-2 px-4">{ele?.file_type}</td>
          <td className="py-2 px-4">{ele?.size&&"KB"}</td>
         <td className="py-2 px-4">{ele.created_At&&new Date(ele.created_At).toLocaleString()}</td>
           <td className="py-2 px-4 items-center">
            {ele?.status=="Processing"&&<div className='flex justify-center w-min px-4'>
              <FaSpinner  className="animate-spin text-blue-600" title={ele?.status}/>
            </div>||
            
            <div className={`w-min px-4 font-semibold py-0.5 text-center rounded-md
             ${ele.status=="Ready" &&"bg-green-200 text-green-600"}  ${ele?.status=="Error" &&"bg-red-200 text-red-600"}`}>{ele?.status}</div>}
          
          
          </td>
          <td className="py-2 px-4 flex gap-2">
            
              <button
                className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                onClick={()=>setpreview(ele.file_path)}
              >
              Preview
              </button>
              <button
                className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                onClick={async()=>await DeleteDocument(ele.id)}
              >
              Delete
              </button>
            
          </td>
        </tr>
       
   
      ))}
    </tbody>
  </table>
</div>



   </div>
    </div>
  )
}

export default Documents
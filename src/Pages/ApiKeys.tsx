import Form from "../Components/Form";
  import { MdDelete } from "react-icons/md";
  import { FiEdit } from "react-icons/fi";
  import { Button } from '../utilis';
  import { FaPlus } from "react-icons/fa";
import { useState } from "react";
  function ApiKeys() {
    const [showForm, setShowForm] = useState(false);
    const [name,setname]=useState('')
    const [expiry,setexpiry]=useState('')
    return (
      <div className=' h-full p-2 ml-4 flex   flex-col place-items-center justify-center z-0 gap-12 '>
       <Form
       className={` ${showForm ? 'flex flex-col' : 'hidden'}`}
       onSubmit={(e)=>{
        e.preventDefault();
         console.log({name,expiry});
      
      }}
  heading="Create new secret key"
  subheading="This API key is tied to your user and can make requests against the selected project. If you are removed from the organization or project, this key will be disabled."
  endHeading="Make sure to store the key securely as it will not be shown again."
  formInput={[
    {
      id: "keyName",
      name: "keyName",
      type: "text",
      label: "Key Name",
      value:name,
      onChange:(e)=>setname(e.target.value),
      placeholder: "e.g. My API Key",
      helperText: "A human-friendly name for identifying this key.",
      className:
        "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    },
    {
      id: "expiry",
      name: "expiry",
      type: "date",
      value:expiry,
      onChange:(e)=>setexpiry(e.target.value),
      label: "Expiry Date",
      helperText: "Optional. Leave empty for no expiry.",
      className:
        "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    },
  ]}
  formButton={[
    {
      type: "submit",
      label: "Create Key",
      className:
        "w-full text-sm sm:text-base bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer",

    },
    {
      type: "button",
      label: "Cancel",
      className:
        "w-full text-sm sm:text-base bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer",
      onClick: () => setShowForm(false),
    },
  ]}
/>


        <div className='flex justify-between w-full place-items-center'>
          <h2 className='text-xl sm:text-2xl font-semibold font-serif'>Api Keys</h2>
        <Button label="Create new secret key" className='bg-indigo-600 flex font-semibold text-white p-2 px-3 rounded-lg cursor-pointer text-sm lg:text-[16px]' 
        startIcon={ <FaPlus className='text-[12px]'/>} onClick={()=>setShowForm(true)}/>

        </div>
      <div className="overflow-x-auto w-full mx-auto">
      <table className="w-full border-2 border-gray-500 rounded-lg">
        <thead className="">
          <tr className="h-12">
            <th className="px-4">API Key</th>
            <th className="px-4">Project</th>
            <th className="px-4">Role</th>
            <th className="px-4">Created At</th>
            <th className="px-4">Expires At</th>
            <th className="px-4">Actions</th>
          </tr>
        </thead>
        <tbody className='min-w-[800px]'>
          {Array(6)
            .fill({})
            .map((_, i) => (
              <tr
                key={i}
                className="h-12 border-t-2 border-gray-500 hover:bg-gray-50"
              >
                <td className="text-center">sk-9f3x****2kq</td>
                <td className="text-center">Knowledge Base RAG</td>
                <td className="text-center">Admin</td>
                <td className="text-center">2025-09-01</td>
                <td className="text-center">2026-09-01</td>
                <td className="flex justify-center items-center space-x-2 py-2">
                  <button className="text-red-600 hover:text-red-800 cursor-pointer">
                    <MdDelete size={18} />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    <FiEdit size={18} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
      </div>
    )
  }
  
  export default ApiKeys
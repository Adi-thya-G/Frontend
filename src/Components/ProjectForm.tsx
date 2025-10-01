
import Input from './Input'
import Button from './Button'
import { IoClose } from "react-icons/io5";
import  useDashboardStore from '../store/Dashboard'
import { useEffect, type FormEvent } from 'react';
function ProjectForm() {

  const isCreateProjectModalOpen=useDashboardStore((state)=>state.isCreateProjectModalOpen)
  const closeCreateProjectModal:Function=useDashboardStore((state)=>state.closeCreateProjectModal)

   useEffect(():any=>{
    if(isCreateProjectModalOpen)
      document.body.style.overflow="hidden"
    else
       document.body.style.overflow = "auto";
    return ()=>document.body.style.overflow="auto"

    
   },[isCreateProjectModalOpen])

   const formSubmit=(e:FormEvent)=>{
    e.preventDefault()

   }

  return (
 <div className={ `w-full h-full  fixed   justify-center place-items-center md:left-20  z-10 ${isCreateProjectModalOpen?"flex":"hidden"} `}>
  <form className='w-[400px]  rounded-md' >
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
      <div className='flex justify-center'>
        <h1 className="text-xl font-bold text-gray-800 mb-2">
        Create a new RAG project
      </h1>
     
      </div>
      <p className="text-sm text-gray-600 mb-6">
        RAG projects are environments where you can manage documents, embeddings,
        and API resources to power AI retrieval and generation. Configure your
        data sources, set rate limits, and control access for your team.{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Learn more
        </a>
        .
      </p>

      
        {/* Project Name */}
        <div>
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Project Name
          </label>
          <Input
            type="text"
            id="projectName"
            placeholder="e.g. Support Knowledge Base"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Human-friendly label for your RAG project, shown in dashboards and
            exports.
          </p>
        </div>

        {/* Data Source Field (optional) */}
        

        {/* Submit */}
        <div className="pt-2 flex gap-2">
          <Button
            type="button"
            className="w-full text-[13px] bg-blue-600 text-white font-semibold py-2 px-2 rounded-lg hover:bg-blue-700 transition cursor-pointer sm:text-[16px] z-50"
           label=' Create RAG Project' 
           onClick={formSubmit}
          >
           
          </Button>
           <Button
           label='Close'
           className='w-full py-2 text-white z-50 bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold cursor-pointer text-[13px] sm:text-[16px]'
       onClick={(e)=>{
        e.preventDefault()
        closeCreateProjectModal()
       }}><IoClose/></Button>
        </div>
     
    </div>
  </form>

 </div>
  )
}

export default ProjectForm
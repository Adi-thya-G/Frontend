import { useState } from 'react'
import chats from '../../public/chat.png'

import { FaArrowUp } from "react-icons/fa6";
import { Button } from '../utilis'
import ChatsHooks from '../store/Chats';
import ChatLayout from '../Components/ChatLayout';

function Chats() {

  const isInitailchats:Boolean=ChatsHooks((state)=>state.isInitailchats)
  const setInitaialchats:Function=ChatsHooks((state)=>state.setInitaialchats)
  const [text,settext]=useState<string>("")
 const messages = [
  {
    id: 1,
    role: "user",
    content: "Hey, can you explain how the RAG system API works?",
    timestamp: "2025-09-23 10:15 AM",
  },
  {
    id: 2,
    role: "assistant",
    content: "Sure! The RAG system API lets you query knowledge bases and return relevant answers. You can generate API keys to access specific projects.",
    timestamp: "2025-09-23 10:16 AM",
  },
  {
    id: 3,
    role: "user",
    content: "How do I create an API key for a new project?",
    timestamp: "2025-09-23 10:18 AM",
  },
  {
    id: 4,
    role: "assistant",
    content: "Go to the project dashboard, click 'Create API Key', assign a role (admin or read-only), and set an expiration date.",
    timestamp: "2025-09-23 10:19 AM",
  },
  {
    id: 5,
    role: "user",
    content: "Can I edit or delete an API key later?",
    timestamp: "2025-09-23 10:21 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },{
    id: 1,
    role: "user",
    content: "Hey, can you explain how the RAG system API works?",
    timestamp: "2025-09-23 10:15 AM",
  },
  {
    id: 2,
    role: "assistant",
    content: "Sure! The RAG system API lets you query knowledge bases and return relevant answers. You can generate API keys to access specific projects.",
    timestamp: "2025-09-23 10:16 AM",
  },
  {
    id: 3,
    role: "user",
    content: "How do I create an API key for a new project?",
    timestamp: "2025-09-23 10:18 AM",
  },
  {
    id: 4,
    role: "assistant",
    content: "Go to the project dashboard, click 'Create API Key', assign a role (admin or read-only), and set an expiration date.",
    timestamp: "2025-09-23 10:19 AM",
  },
  {
    id: 5,
    role: "user",
    content: "Can I edit or delete an API key later?",
    timestamp: "2025-09-23 10:21 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },
  {
    id: 6,
    role: "assistant",
    content: "Yes! You can use the Actions column in the API keys table to edit or revoke keys at any time. Make sure to check the permissions assigned to each key before modifying it. For audit purposes, all changes are logged with timestamps, so you can track who made which change and when. Additionally, consider setting expiration dates for keys you no longer actively use to improve security.",
    timestamp: "2025-09-23 10:22 AM",
  },
];



  const chatsSubmit=()=>{
    if(isInitailchats&&text!="")setInitaialchats()


  }
  return (
    <div className=' h-full w-full p-2 flex place-items-center justify-center z-0'>
    <div className='grid   w-full h-[88vh]  gap-2 rounded-lg  p-2'>
  <div className='  h-[68vh] w-full flex justify-center place-items-center  '>
    {/*initial page*/ }
    {
      isInitailchats?(
        <div className='flex justify-center flex-col place-content-center gap-2 '>
       <div className='w-full flex justify-center'>
        <img src={chats} alt="" className='w-20 h-20' />
       </div>
      <h5 className='flex justify-center'>
        Your converstion will appear here
      </h5>
    </div>
      ):(
        <div className='w-full h-full flex flex-col gap-3 overflow-y-auto scrollbar p-2'>
           {messages.map((ele)=>(<ChatLayout ele={ele}/>))}
        </div>
      )
    }
    {/* Chat messages */}

  </div>
  <div className='  p-2 relative h-[18vh] flex place-items-end   z-0 '>
    {/* Input box */}
    <textarea name="" id="" value={text} onChange={(e)=>settext(e.target.value)} className='w-full h-full  rounded-lg p-3  font-sans text-[19px] border-2 border-black relative z-0'>

    </textarea>
    <div className='w-full  flex justify-end absolute bottom-7 right-5'>
      <Button onClick={chatsSubmit} label="" startIcon={<FaArrowUp/>} className='text-white bg-sky-600 p-2 h-8 w-8 rounded-full cursor-pointer'></Button>

    </div>
  </div>
</div>

    </div>
  )
}

export default Chats
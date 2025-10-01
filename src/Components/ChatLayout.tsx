
import { MdCancel } from "react-icons/md";
function ChatLayout({ele}:any) {
  return (
    <div className='h-max w-full bg-gray-300 p-2 rounded-md '>
      <div className='flex w-full justify-between '>
        <span className='text-sm'>{ele?.role}</span>
          <button className='cursor-pointer'> <MdCancel size={17}/></button>
      </div>
      <div>
       <p>{ele.content}</p>
      </div>

    </div>
  )
}

export default ChatLayout
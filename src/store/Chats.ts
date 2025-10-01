import {create} from 'zustand'
interface chatsHooksState{
   isInitailchats:boolean,
   setInitaialchats:()=>void
}
const ChatsHooks=create<chatsHooksState>((set)=>({
  isInitailchats:true,
  setInitaialchats:()=>set({isInitailchats:false})
}))

export default ChatsHooks
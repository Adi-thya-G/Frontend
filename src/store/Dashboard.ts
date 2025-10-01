import {create} from "zustand"

interface DashboardState{
  isCreateProjectModalOpen:boolean,
  openCreateProjectModal:()=>void,
  closeCreateProjectModal:()=>void
}
const DashboardHooks=create<DashboardState>((set)=>({
    isCreateProjectModalOpen:false,
    openCreateProjectModal:()=>set({ isCreateProjectModalOpen: true }),
    closeCreateProjectModal:()=>set({isCreateProjectModalOpen:false})
  }
))

export default DashboardHooks



import { Outlet } from "react-router-dom";
import ProjectForm from "./Components/ProjectForm";
import NavBarPage from "./Pages/NavBarPage";


function App() {
  return (
<>
<div className="relative w-full h-full">
  <NavBarPage/>
   <div className='w-full h-full xl:left-64 xl:w-[52%] 2xl:w-[80%] z-0 sm:top-2 relative  '>
       <ProjectForm/>
       <Outlet />
      </div>
    
  
</div>
</>
  );
}

export default App

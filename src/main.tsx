import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Pricing from './Pages/Pricing.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import Chats from './Pages/Chats.tsx'
import Apikeys from './Pages/ApiKeys.tsx'
import Documents from './Pages/Documents.tsx'
import Login from './Pages/Login.tsx'
import KnowledgeBase from './Pages/KnowledgeBase.tsx'
const router = createBrowserRouter([
   {
    path: "/",
    element: <App />, // Wraps children with layout and <Outlet />
    children: [
      { path:"dashboard",element: <Dashboard /> },
      { path: "playground", element: <Chats /> },
      { path: "api-keys", element: <Apikeys /> },
      { path: "documents", element: <Documents /> },
      {
        path: "knowledge-base",element:<KnowledgeBase/>,
      }
    ],
  },
  {
    path: "/login",   // ✅ separate top-level route
    element: <Login />,
  },{
    path: "/pricing",   
    element: <Pricing />,
  }
]);


createRoot(document.getElementById('root')!).render(

    
  // main.jsx
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>

)

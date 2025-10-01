import { axiosInstance } from "./axios";

export const login=async(email:string,password:string)=>{
  try {
   const response=await  axiosInstance.post("user/login",{email:email,
    password:password})
    return response
  } catch (error) {
    console.log(error)
  }
}

export const GetAllDocument=async()=>{
  try {
    return await axiosInstance.get("projects/documents/10f94549-96a2-4e85-82d8-b5a311f5a1a3")
  } catch (error) {
    console.log(error)
  }
}

export const DeleteDocument=async(id:string)=>{
  try {
   return await axiosInstance.delete(`documents/delete/${id}`)
  } catch (error) {
    
  }
}
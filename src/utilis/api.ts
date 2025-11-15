import { axiosInstance } from "./axios";
import {type PayementIntialize}from "./type";
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

export const PayemntIntailized=async(formdata:PayementIntialize)=>{
    return await axiosInstance.post(`payments/initailze`,formdata)
 
}


//GET DATA

export const PlansDetails=async()=>{
  return await axiosInstance.get("plans/getData")
}

export const paymentstatus=async()=>{
   return await axiosInstance.get('payments/status')

   }
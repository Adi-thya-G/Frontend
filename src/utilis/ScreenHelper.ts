import { useState,useEffect } from "react";

const useBreakPoint=()=>{
  const [breakPoint,setBreakPoint]=useState("lg")

  useEffect(()=>{
    const cal=()=>{
      const width:number=window.innerWidth
      if(width<640)setBreakPoint("sm")
      else if(width<768)setBreakPoint("md")
      else if(width<1024)setBreakPoint("lg")
     else if(width<1280)setBreakPoint("xl")
     else setBreakPoint("2xl")
    }
    cal()
    window.addEventListener("resize",cal)
    return ()=>window.removeEventListener("resize",cal)
  })
  return breakPoint
}

export default useBreakPoint

import Button from "../Components/Button"
import { PlansDetails,PayemntIntailized } from "../utilis/api";

import PricingCard from '../Components/PricingCard';
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const style={
  "FREE":{
    classname:'w-[300px] h-[480px] lg:w-[350px] lg:absolute bg-white shadow-md shadow-neutral-300 lg:left-24 xl:left-56  large-left rounded-md',
    button:'bg-gray-300 text-gray-500 font-semibold w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans',
  },
   "PRO":{
classname:'w-[300px] h-[490px] lg:w-[350px] lg:absolute font-semibold bg-white shadow-md shadow-neutral-300   rounded-md px-4 ',
    button:"bg-black text-white w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans"
   },
   "ENTERPRISE":{
classname:'h-full md:h-[510px] md:-right-4 md:w-[280px] md:absolute lg:w-[350px] bg-white  shadow-md shadow-neutral-300 lg:right-24 xl:right-56 2xl:right-[18%] large-right rounded-md p-2 px-2 ',
    button:"bg-blue-600 text-white w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans"
   }
   
}

const onclickButton=async(formdata:any)=>{
  try {
    const response=  await PayemntIntailized(formdata)
    console.log(response)
    const redirectUrl = response.data.data.redirectUrl;
// Redirect user to payment page
window.location.href = redirectUrl;
  } catch (error) {
    
  }
}
function Pricing() {

 const [data, setdata] = useState<Array<{


 }>>([]);
const [plansdata,setplansdata]=useState<Array<{


 }>>([])
  useEffect(()=>{
    const plansdata=async()=>{
   try {
      const response= await PlansDetails()
       setplansdata(response.data.data)
   } catch (error) {
    console.log(error)
   }
    }
    plansdata()
  },[])

  useEffect(()=>{
    if(!plansdata) return

   const transform:any= plansdata?.map((plan:any)=>{
    const features=[]
   features.push(`${plan.ragQueries} RAG queries per month`);
   features.push(`${plan.maxDocuments} documents upload limit`);
   features.push(`${plan.maxStorageMB} MB storage`);
   features.push(`${plan.maxApiKeys} API key(s)`);

  if (plan.supportLevels === "NONE") {
    features.push("No dedicated support");
  } else if (plan.supportLevels === "EMAIL") {
    features.push("Email support");
  } else if (plan.supportLevels === "CHAT") {
    features.push("Live chat support");
  } else if (plan.supportLevels === "DEDICATED") {
    features.push("Dedicated account manager support");
  }
  return {plan,features,}
    })
    setdata(transform)
   console.log(data)
    
  },[plansdata])

  const premiumFeatures = [
  "Unlimited RAG queries per month",
  "Faster AI response time (2x priority)",
  "Upload up to 500 documents (PDF, DOCX, TXT)",
  "Larger context window (200k tokens)",
  "Custom API keys with higher rate limits",
  "Usage analytics & activity dashboard",
  "24/7 premium customer support",
];

const freeFeatures = [
  "100 RAG queries per month",
  "Standard AI response time",
  "Upload up to 3 documents",
  "Context window up to 20k tokens",
  "Shared API key with basic limits",
];


  return (
    <div className='flex w-full h-full sm:h-screen place-items-center flex-col px-4 '>
     <div className=' gap-8   flex flex-col py-6  lg:py-12'>
      <h2 className='text-2xl md:text-4xl font-bold font-serif flex justify-center'>Pricing & Plans</h2>
     <p className='font-serif flex justify-center text-gray-700 font-semibold text-[13px] '>Simple Pricing No Hidden Fees. Advanced Features  for your business .</p>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full gap-5 h-full mx-auto pb-10 lg:px-10 xl:mx-16 2xl:px-16 justify-between place-items-center px-safe lg:relative xl:justify-center '>
     {
      data?.map((element)=>(
        <PricingCard 
       
        key={element.plan.id}
        className={style[element?.plan?.name].classname} 
        Plans_types={element.plan.name} description={element?.plan?.description} amount={element?.plan?.price} point={element?.features}
     button={<Button className={style[element?.plan?.name].button} label='Get Started' 
     onClick={async(e)=>{
      onclickButton({id:element.plan.id ,name:element?.plan?.name,amount:element?.plan?.price,version:element?.plan?.version})
   
   
     }}>

            </Button>}
     />
      ))
     }
     
     
      
     </div>
    </div>
  )
}

export default Pricing
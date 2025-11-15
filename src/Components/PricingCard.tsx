
import { FaCheck } from "react-icons/fa6";

import Card from './Card';
import type { ComponentProps, ReactNode } from "react";
interface Props extends ComponentProps<"div">{
  Plans_types:string,
  description:string
  amount:number
  point:Array<string>
  className:string
  button:ReactNode
}

function PricingCard({Plans_types,description,amount,point,className,button,...props}:Props) {
  return (
   <div className={`${className}`} {...props}>
        <div className='w-full flex justify-center'>
        <div className=' flex flex-col gap-3 p-2 py-3'>
<div className='flex px-5 py-3'>
<Card/>
</div>
<div className='px-5 flex flex-col gap-2'>
  <h5 className='text-xl font-semibold'>{Plans_types}</h5>
  <p className='font-sans font-semibold text-xs '>{description}</p>
</div>
<div className='relative px-5 flex place-items-center  py-1'>
  <div className='font-semibold text-xl'>
₹
  </div>
  <h4 className='text-[27px] font-bold px-1'>
{amount.toFixed(2)}
  </h4>
  <span className='text-xs font-semibold text-gray-600'>/month</span>
</div>


<div className="space-y-2 text-sm text-gray-700">
  {point?.map((feature, index) => (
    <div key={index} className="flex items-center gap-2">
      <span className="text-gray-400 font-semibold"><FaCheck/></span>
      <span className='text-[13px] font-semibold'>{feature}</span>
    </div>
  ))}
</div>

        </div>
             
            </div>
      
      <div className='w-full flex justify-center py-5'>
            {button}
            </div>

     </div>
  )
}

export default PricingCard

import Button from "../Components/Button"


import PricingCard from '../Components/PricingCard';
function Pricing() {

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
     <PricingCard className='w-[300px] h-[450px] lg:absolute bg-white shadow-md shadow-neutral-300 lg:left-24 xl:left-20  
    large-left rounded-md' Plans_types='Free' description='' amount={0.00} point={freeFeatures}
     button={<Button className="bg-gray-300 text-gray-500 font-semibold w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans" label='Get Started'>

            </Button>}
     />
     
       <PricingCard
       className='w-[300px] h-[480px] lg:absolute font-semibold bg-white shadow-md shadow-neutral-300   rounded-md px-4 '
       Plans_types='Pro'
       description='Saving ₹ 3000 for year'
       amount={4000.89}
       point={freeFeatures}
       button={ <Button className="bg-black text-white w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans" label='Get Started'>

            </Button>}
       />

      <PricingCard
      className='h-full md:h-[530px] md:-right-4 md:w-[300px] md:absolute lg:w-fit bg-white  shadow-md shadow-neutral-300 lg:right-24 xl:right-64 2xl:right-[18%] large-right rounded-md p-2 px-2 '
      Plans_types='Enterprise'
      description='Saving ₹ 5000 for year'
      amount={9000.89}
      point={premiumFeatures}
      button={ <Button className="bg-blue-600 text-white w-3/4 h-12 rounded-md cursor-pointer text-[16px] font-sans" label='Get Started'>

            </Button>}
      />
      
     </div>
    </div>
  )
}

export default Pricing
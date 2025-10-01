import { LuBrain } from "react-icons/lu";

function KnowledgeBase() {
return (
  <div className=" w-full h-full lg:h-[90vh] py-2 md:py-1">
    <div className="w-full h-full flex flex-col gap-5 px-1 md:px-3 lg:px-4">
      <div>
        <h4 className="text-[17px] md:text-xl font-semibold ">
          <LuBrain className="inline mb-1 mr-2" size={24} />
          Knowledge Base
        </h4>
      </div>
    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">

      {
        
 [{},{},{},{}].map(()=>(
         <div className="w-full  h-32 md:h-40 bg-white border border-gray-300 rounded-md shadow-sm flex flex-col 
         justify-center items-center gap-2 hover:shadow-md cursor-pointer ">
 <h4 className="text-sm font-semibold p-2">
  Total chunks indexed
 </h4>
 <span className="p-2 text-2xl font-bold">2506</span>
        </div>
       ))


      }
        
      </div>

      <div className="  overflow-y-auto   ">
        <table className="w-full h-full ">
          <thead className="bg-gray-100 border-b border-gray-400">
            <th className="py-3 px-4 text-left">
              Document Name
            </th>
            <th className="py-3 px-4 text-left">
              Tags
            </th>
             <th className="py-3 px-4 text-left">
              chunks
            </th>
            <th className="py-3 px-4 text-left">
              Last Indexed
            </th>
           <th className="py-3 px-4 text-left">
              Actions
            </th>
          </thead>
          <tbody>
  <tr className="border-t">
    <td className="py-2 px-4">Sales FAQ</td>
    <td className="py-2 px-4">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">Support</span>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Sales</span>
    </td>
    <td className="py-2 px-4">120</td>
    <td className="py-2 px-4">2025-09-28</td>
    <td className="py-2 px-4 space-x-2">
      <button className="text-blue-600 hover:underline">View</button>
      <button className="text-green-600 hover:underline">Re-index</button>
      <button className="text-red-600 hover:underline">Delete</button>
    </td>
  </tr>

  <tr className="border-t">
    <td className="py-2 px-4">Product Manual</td>
    <td className="py-2 px-4">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">Product</span>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tech</span>
    </td>
    <td className="py-2 px-4">400</td>
    <td className="py-2 px-4">2025-09-25</td>
    <td className="py-2 px-4 space-x-2">
      <button className="text-blue-600 hover:underline">View</button>
      <button className="text-green-600 hover:underline">Re-index</button>
      <button className="text-red-600 hover:underline">Delete</button>
    </td>
  </tr>

  <tr className="border-t">
    <td className="py-2 px-4">Marketing Guide</td>
    <td className="py-2 px-4">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Marketing</span>
    </td>
    <td className="py-2 px-4">150</td>
    <td className="py-2 px-4">2025-09-20</td>
    <td className="py-2 px-4 space-x-2">
      <button className="text-blue-600 hover:underline">View</button>
      <button className="text-green-600 hover:underline">Re-index</button>
      <button className="text-red-600 hover:underline">Delete</button>
    </td>
  </tr>
</tbody>

        </table>
      </div>

    </div>

  </div>
)
}

export default KnowledgeBase;

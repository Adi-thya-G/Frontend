
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
   Legend,
  
} from "recharts";
import useBreakPoint from "../utilis/ScreenHelper";

const data = [
  { day: "Mon", queries: 30 },
  { day: "Tue", queries: 45 },
  { day: "Wed", queries: 28 },
  { day: "Thu", queries: 60 },
  { day: "Fri", queries: 75 },
  { day: "Sat", queries: 40 },
  { day: "Sun", queries: 50 },
];
export default function Dashboard() {

  const bp=useBreakPoint()
  return (
    <div className="grid md:grid-cols-2 gap-2 sm:h-[93vh] w-[100%] ">
      {
        [{},{},{},{}].map(()=>(
          <div className="w-full h-full  -z-50">
<div className="w-full h-[350px] md:h-full  bg-white shadow-lg rounded-xl p-2 sm:p-4">
      <h2 className="text-lg font-semibold mb-2 sm:mb-4 ">Query Usage (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height="90%" id={"style"} >
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day"  />
          <YAxis width={bp=="sm"&&30||60} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="queries"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
      </div>  
        ))
      }        
           
    </div>
   
  );
}

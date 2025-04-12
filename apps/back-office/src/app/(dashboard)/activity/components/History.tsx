import React, { useState } from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import { Button, Input } from "@mcw/ui";
import { useRouter } from "next/navigation";
import HistoryTable from "@/(dashboard)/activity/components/HistoryTable";

const History = () => {
  const [sortBy, _setSortBy] = useState("All Time");
  const router = useRouter();

  const handleRedirect = (id: string) => {
    console.log(id);
  };
  return (
   <>
     <div className="flex justify-between items-center mb-4">
       <div className="relative w-[230px]">
         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
         <Input
           className="pl-9 px-9 h-10 bg-white border-[#e5e7eb]"
           placeholder="Search"
         />
       </div>

       <div className="flex items-center gap-4">
         <Button
           className="border-[#e5e7eb] bg-white h-10"
           variant="outline"
         >
           <Filter className="mr-2 h-4 w-4 text-blue-500" />
          Events
         </Button>

         <div className="flex items-center gap-2">
           <span className="text-sm text-gray-500">Sort:</span>
           <Button
             className="border-[#e5e7eb] bg-white h-10"
             variant="outline"
           >
             {sortBy}
             <ChevronDown className="ml-2 h-4 w-4" />
           </Button>
         </div>
       </div>
     </div>
     <HistoryTable onRowClick={handleRedirect} />
   </>
  );
};
export default History;


import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationsItem = ({item}) => {
    const [expanded,setExpanded]=useState(false)
    
     const formatDate = (date) => {
    if (!date) return "—";

    if (typeof date === "object" && date.seconds) {
      return new Date(date.seconds * 1000).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }

    const parsed = new Date(date);
    if (isNaN(parsed)) return "—";

    return parsed.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div  onClick={()=> setExpanded(!expanded)} className='p-4 max-w-4xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
    <div className='flex justify-between item-start gap-4'>
         <div>
            <h2>{item.prompt}</h2>
        <p className='text-gray-500'>
            {/* {item.type}.{new Date(item.created_at).toLocaleDateString} */}
           {item.type} · {formatDate(item.createdAt || item.created_at)} 
        </p>
         </div>
         <button className='bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-1 rounded-full'>
            {item.type}</button>
    </div>
    {
        expanded && (
          <div>
            {item.type === 'image' ? (
                <div>
                    <img src={item.content} alt="Image" className='mt-3 w-full max-w-md' />
                </div>
            ):(
                <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
                     <div className='reset-tw'>
                        <Markdown>{item.content}</Markdown>
                        
                     </div>
                </div>
            )}
          </div>
        )
    }
    </div>
  )
}

export default CreationsItem
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePendingActions } from "react-icons/md";

const Card = ({task, updateEventInStorage, cardBg, cardText}) => {
    //console.log(task.dateOfEvent);
  return (
    <div className='w-full sm:w-[300px] h-[150px] flex justify-between gap-[1px] sm:gap-x-1 relative'>
        <div className='text-center flex-shrink-0'>
            <p className={`text-[10px] uppercase font-semibold ${cardText}`}>{task.dateOfEvent.day.substring(0,3)}</p>
            <p className={`text-[16px] font-semibold ${cardText}`}>{task.dateOfEvent.date}</p>
            <p className={`text-[15px] uppercase font-semibold ${cardText}`}>{task.dateOfEvent.month.substring(0,3)}</p>

        </div>
        <div className={`flex-1 flex flex-col justify-between items-start
         text-white rounded-lg ${cardBg} px-2 py-2 gap-y-1`}>
            
            <p className='text-[14px]'>
              {task.startTimeFormatted} - {task.endTimeFormatted}
            </p>
            
            <div className='flex-1 w-full overflow-y-auto'>
              <p className='text-[18px] capitalize break-words leading-snug'>
                {task.eventName}
              </p>
              <p className='flex justify-start items-center text-[14px] capitalize gap-x-1'>
                <CiLocationOn  className='text-white text-xl font-bold'/>
                <span className=' break-words leading-snug'>{task.location}</span>
              </p>
            </div>
            <button
              className='text-[15px] text-[#FF9148] bg-white rounded-md px-2 text-center transition-all duration-200 hover:scale-95'
              onClick={() => updateEventInStorage(task.id)}
            >
              Mark it Done
            </button>
        </div>
        <span
          className='text-[25px] absolute right-4 top-2 text-white rounded-md px-2 text-center '
        >
          <MdOutlinePendingActions />
        </span>
  
    </div>
  )
}

export default Card
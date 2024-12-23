import React, { useMemo } from 'react'
import Card from './Card'
import Heading from './Heading';

const EventsList = ({events, updateEventInStorage}) => {

  const dateChecker = (dateObj) => {
    const eventDate = new Date(`${dateObj.month} ${dateObj.date}, ${dateObj.year}`);
    const today = new Date();
    if(eventDate > today){
      return true;
    }
    return false;
  }

  const todaysEvents = useMemo(()=> {
    return [...events].filter((event) => event.completed === false && dateChecker(event.dateOfEvent) === false).sort((a,b) => a.id - b.id);
  }, [events]);

  const upcomingEvents = useMemo(()=> {
    return [...events].filter((event) => (event.completed === false && dateChecker(event.dateOfEvent)))
    .sort((a,b) => a.id - b.id);
  }, [events]);


  return (
    <div className='w-full sm:w-[50%] md:w-[62%] flex flex-col xs:flex-row sm:flex-col xs:justify-center xs:items-start  md:flex-row justify-center items-center md:justify-around md:items-start gap-y-3 xs:gap-x-1 sm:gap-y-3 md:gap-x-4'>
      
      {/* Todays Events */}
      <div className='flex-1 flex-col'>
        <Heading text={"Today's Events"} color={'[#ff8248]'}/>
        <div className='w-full flex flex-col gap-y-4 h-[450px] overflow-y-auto mt-3'>
        {
          todaysEvents.length > 0 ? 
            (
              todaysEvents.map( (task, id) => (
                <Card task={task} key={id} updateEventInStorage={updateEventInStorage} cardBg={'today-bg'} cardText={'today-text'}/>
              ))
            )
            :
            (<div  className="text-gray-500 text-center">
              No Events Found
            </div>)
            
        }
        </div>
      </div>
      <div className='flex-1 flex-col'>
        <Heading text={"UpComing Events"} color={'[#4073C4]'}/>
        <div className='w-full flex flex-col gap-y-4 h-[450px] overflow-y-auto mt-3'>
        {
            upcomingEvents.length > 0 ? 
              (
                upcomingEvents.map( (task, id) => (
                  <Card task={task} key={id} updateEventInStorage={updateEventInStorage} cardBg={'upcoming-bg'} cardText={'upcoming-text'}/>
                ))
              )
              :
              (<div className="text-gray-500 text-center">
                No Events Found
              </div>)
              
          }
        </div>
      </div>
    </div>
  )
}

export default EventsList
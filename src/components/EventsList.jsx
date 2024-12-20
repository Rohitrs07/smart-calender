import React from 'react'
import Card from './Card'

const EventsList = ({events,setEvents}) => {

  return (
    <div className='w-[250px] flex flex-wrap'>
      {
        events.length > 0 ? 
          (
            events.map( (item,index) => (
              <Card item={item} key={index}/>
            ))
          )
          :
          (<div>
            No Events Found
          </div>)
        
      }
    </div>
  )
}

export default EventsList
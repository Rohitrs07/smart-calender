import React from 'react'

const Card = ({item}) => {
    console.log(item);
  return (
    <div>
        <div>
            <p>{item.dateOfEvent.day}</p>
            <p>{item.dateOfEvent.date}</p>
        </div>
        <div>
            <div>{item.startTime} - {item.endTime}</div>
            <div>{item.eventName}</div>
            <div>{item.location}</div>
        </div>
        
    </div>
  )
}

export default Card
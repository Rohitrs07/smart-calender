import React, { useState } from 'react'
import Calendar from 'react-calendar'


const Calenderr = ({eventDate, setEventDate}) => {

    const [date, setDate] = useState(new Date());
    // const [currentDate, setCurrentDate] = useState(new Date());

    function clickHandler(value){
      //console.log(value);
      //eventDateSetter(value);
      const eventDay = {
        date : value.getDate(),
        day : value.toLocaleString('en-US', { weekday: 'long' }),
        month : value.toLocaleString('en-US', { month: 'long' }),
        year : value.toLocaleString('en-US', { year: 'numeric' }), 
      }

      //console.log(eventDay);
      setEventDate(eventDay);
    }

    // function eventDateSetter(value){
    //   setEventDate(value.getDate());
    // }

  return (
    <div className='w-[300px] h-[100vh] flex justify-center items-center'>
        <Calendar 
          date={date} 
          // tileClassName={`${date === currentDate ? 'bg-[#FF6754]' : 'bg-white'}`}
          setDate={setDate}
          onClickDay={(value) => clickHandler(value)}
          className='' />
    </div>
  )
}

export default Calenderr
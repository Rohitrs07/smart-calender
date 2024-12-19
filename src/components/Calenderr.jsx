import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const Calenderr = () => {

    const [date, setDate] = useState(new Date());
    
    function clickHandler(value){
      console.log(value);
    }

  return (
    <div className='w-[450px] h-[100vh] flex justify-center items-center'>
        <Calendar 
          date={date} 
          setDate={setDate}
          onClickDay={(value) => clickHandler(value)}
          className='' />
    </div>
  )
}

export default Calenderr
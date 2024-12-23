import React, { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import toast from 'react-hot-toast';
import './MyCalender.css'


const MyCalender = ({events, setEventDate, openModal}) => {
    console.log(events);
    const [todayDate, setTodayDate] = useState(new Date());
    const [activeDates, setActiveDates] = useState([]);
    const prevEventsRef = useRef();

    console.log(activeDates)

    // Utility function to normalize dates to midnight
    const normalizeDate = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const fillActiveDates = () => {
      const normalizedActiveDates = (events).map( (event) =>
        normalizeDate(new Date( event.dateOfEvent.fullDate))
    );
    
    setActiveDates(normalizedActiveDates);
    }

    useEffect( () => {
      if (JSON.stringify(prevEventsRef.current) !== JSON.stringify(events)){
        fillActiveDates();
        prevEventsRef.current = events;
      }
    }, [events]);

    useEffect( () => {
      if (JSON.stringify(prevEventsRef.current) !== JSON.stringify(events)){
        fillActiveDates();
        prevEventsRef.current = events;
      }
    }, []);

    const clickHandler = (value) => {
      const normalizedToday = normalizeDate(todayDate);
      const normalizedValue = normalizeDate(value);

      if (normalizedValue >= normalizedToday) {
        const eventDay = {
          date: value.getDate(),
          day: value.toLocaleString('en-US', { weekday: 'long' }),
          month: value.toLocaleString('en-US', { month: 'long' }),
          year: value.toLocaleString('en-US', { year: 'numeric' }),
          fullDate: normalizedValue,
        };

        setEventDate(eventDay);
        openModal();
      } else {
        toast.error('Please Select Today or an Upcoming Date');
      }
      
    }

    const setTileClassName = ({date, view}) => {
      const normalizedToday = normalizeDate(todayDate);
      const normalizedDate = normalizeDate(date);

      if(view === 'month' && normalizedDate.getTime() === normalizedToday.getTime() ){
        return 'today-date';
      }
      if (view === 'month' && normalizedDate < normalizedToday) {
        return 'past-date';
      }

      if (
        view === 'month' &&
        activeDates.some((activeDate) => activeDate.getTime() === normalizedDate.getTime())
      ) {
        return 'active-date';
      }
      return null;
    }


  return (
    <div className='w-full sm:w-[47%] md:w-[35%] flex items-center justify-center '>
        <Calendar 
          date={todayDate} 
          tileClassName={setTileClassName}
          setDate={setTodayDate}
          onClickDay={(value) => clickHandler(value)}
          className='' />
    </div>
  )
}

export default MyCalender
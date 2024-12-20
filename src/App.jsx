
import { useEffect, useState } from 'react';
import './App.css'
import Calenderr from './components/Calenderr'
import EventForm from './components/EventForm';
import EventsList from './components/EventsList';

function App() {

    const [eventDate, setEventDate] = useState();
    const [events, setEvents] = useState([]);

    console.log(events);

    useEffect( () => {
      const savedEvents = localStorage.getItem('eventsData');
      if(savedEvents){
        setEvents(JSON.parse(savedEvents));
      }
    },[]);

    useEffect( () => {
      localStorage.setItem('eventsData', JSON.stringify(events));
    }, [events]);

    const handleEvents = (newEventData) => {
      setEvents((prev) => [...prev, newEventData]);
    }

  return (
    <div className='w-11/12 min-h-screen mx-auto flex flex-col'>
      <Calenderr eventDate={eventDate} setEventDate={setEventDate}/>
      <EventsList events={events}/>
      {
        eventDate && 
        <EventForm eventDate={eventDate} setEventDate={setEventDate} handleEvents={handleEvents}/>
      }
    </div>
  )
}

export default App

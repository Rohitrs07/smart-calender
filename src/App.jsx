
import { useEffect, useState } from 'react';
import './App.css'
import EventForm from './components/EventForm';
import EventsList from './components/EventsList';
import Header from './components/Header';
import InitialTransition from './components/InitialTransition';
import MyCalender from './components/MyCalender';
import toast from 'react-hot-toast';

function App() {

    const [showTransition, setShowTransition] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventDate, setEventDate] = useState();
    const [events, setEvents] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    // console.log(events);

    const getEventsFromStorage = () => {
      const savedEvents = localStorage.getItem('eventsData');
      if(savedEvents){
        setEvents(JSON.parse(savedEvents));
      }
    }

    useEffect( () => {
      getEventsFromStorage();
    },[]);

    const saveEventsToStorage = () => {
      localStorage.setItem('eventsData', JSON.stringify(events));
    }

    useEffect( () => {
      saveEventsToStorage();
    }, [events]);

    const handleEvents = (newEventData) => {
      setEvents((prev) => [...prev, newEventData]);
    }

    const updateEventInStorage = (eventId) => {
      getEventsFromStorage();
      const updatedEvents = events.map( (event) => {
        return event.id === eventId ? { ...event, completed:true } : event
      });
      setEvents(updatedEvents);
      saveEventsToStorage();
      toast.success('Event Done Successfully');
    }

    
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowTransition(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);

    // console.log(events);
    // const clearEvents = () => {
    //   console.log(events);
    //   if (events && events.length > 0) {
    //     localStorage.removeItem('eventsData'); // Clear localStorage
    //     setEvents([]); // Update the state to an empty array
    //     toast.error('All Events Deleted');
    //   } else {
    //     toast.error('No Events to Delete');
    //   }
    // }

  return (
    <>
    { showTransition && <InitialTransition /> }
    
    <div className='w-full sm:w-11/12 mx-auto flex flex-col '>
      <Header />
      {/* <button onClick={clearEvents}>clear</button> */}
      <div className='w-full flex flex-col sm:flex-row justify-start sm:justify-between sm:items-start sm:flex-wrap 
      rounded-lg gap-y-4 sm:gap-x-4  my-[1rem]  px-2 py-[1rem] border shadow-[0_4px_8px_#FF6754] '>
        <MyCalender events={events || []} setEventDate={setEventDate} openModal={openModal}/>

        <EventsList events={events} updateEventInStorage={updateEventInStorage}/>
      </div>
      
    </div>
    {
      isModalOpen && 
      <EventForm eventDate={eventDate} setEventDate={setEventDate} handleEvents={handleEvents} closeModal={closeModal}/>
    }
    </>
  )
}

export default App

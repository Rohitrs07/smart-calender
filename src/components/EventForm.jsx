import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineEventNote } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const EventForm = ({eventDate, setEventDate, handleEvents, closeModal}) => {

    const eventDay = {
        date : new Date().getDate(),
        day : new Date().toLocaleString('en-US', { weekday: 'long' }),
        month : new Date().toLocaleString('en-US', { month: 'long' }),
        year : new Date().toLocaleString('en-US', { year: 'numeric' }), 
      };

    const [formData, setFormData] = useState({
        id: Date.now(),
        dateOfEvent: eventDay,
        eventName:'',
        startTime: '',
        endTime: '',
        location: '',
        completed: false
    });

    const formatTime = (time24) => {
        const [hour, minute] = time24.split(':');
        const hourNumber = parseInt(hour, 10);
        const ampm = hourNumber >= 12 ? 'PM' : 'AM';
        const formattedHour = hourNumber % 12 || 12;
        return `${formattedHour}:${minute} ${ampm}`;
      };

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData( (prev) => {
            return{
                ...prev,
                [name]: value
            };
        });

    }

    const submitHandler = (event) => {
        event.preventDefault();
        const eventData = {
            ...formData,
            dateOfEvent : eventDate,
            startTimeFormatted: formatTime(formData.startTime),
            endTimeFormatted: formatTime(formData.endTime),
            
        }
        
        handleEvents(eventData);
        toast.success('Event Saved Successfully');
        setEventDate('');
        closeModal();
    }

    

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className="flex flex-col justify-center bg-white p-6 rounded shadow-lg max-w-md w-full gap-y-1">
            <div className='w-[95%] bg-primary-gradient rounded-md text-white text-center py-1'>
                <h2 className='text-lg'>Add Event</h2>
            </div>
        
            
            <h3 className='font-medium border-[#FF9148] border-b-2 max-w-max'>
                For Date: {
                    eventDate === undefined ? 
                    `${eventDay.date} ${eventDay.month} ${eventDay.year}`
                     :
                    `${eventDate.date} ${eventDate.month} ${eventDate.year}`
                    }
            </h3>
            <form 
                onSubmit={(event) => submitHandler(event)}
                className='w-[95%] flex flex-col justify-center gap-4 mt-2'
            >
                <div className='w-full flex flex-wrap justify-start gap-2'>
                    <div className='flex justify-start items-start mt-[3px] font-bold'>
                    <MdOutlineEventNote />
                    </div>
                    <div className='w-[93%] flex flex-col justify-center gap-y-1 text-primary-text'>
                        <label htmlFor='eventName'>Event Name</label>
                        <input 
                            id='eventName'
                            type='text'
                            name='eventName'
                            onChange={(event) => changeHandler(event)}
                            value={formData.eventName}
                            placeholder='Client Meeting'
                            required
                            className='w-full border-secondary-text border-b-2 focus:outline-none '
                        />
                    </div>
                </div>
                
                <div className='w-full flex flex-wrap justify-start gap-2'>
                    <div className='flex justify-start items-start mt-[3px]'>
                        <MdAccessTime />
                    </div>
                    <fieldset className='w-[93%] text-primary-text'>
                        <legend>Select Time</legend>
                        <div className='flex justify-between'>
                            <label htmlFor='startTime'>Start Time</label>
                            <input 
                                id='startTime'
                                type='time'
                                name='startTime'
                                onChange={(event) => changeHandler(event)}
                                value={formData.startTime}
                                className='focus:outline-none'
                                required
                            />
                        </div>
                        <div className='flex justify-between'>
                            <label htmlFor='endTime'>End Time</label>
                            <input 
                                id='endTime'
                                type='time'
                                name='endTime'
                                onChange={(event) => changeHandler(event)}
                                value={formData.endTime}
                                className='focus:outline-none'
                                required
                            />
                        </div>

                    </fieldset>
                </div>
                <div className='w-full flex flex-wrap justify-start gap-2'>
                    <div className='flex justify-start items-start mt-[3px]'>
                        <MdOutlineLocationOn />
                    </div>
                    <div className='w-[93%] flex flex-col justify-center gap-y-1 text-primary-text'>
                        <label htmlFor='location'>Add Location</label>
                        <input 
                            id='location'
                            type='text'
                            name='location'
                            onChange={(event) => changeHandler(event)}
                            value={formData.location}
                            placeholder='1/2 MalharGanj, Indore'
                            className='w-full border-secondary-text border-b-2 focus:outline-none '

                        />
                    </div>
                </div>
                <button
                    className=' bg-primary-gradient rounded-md text-white text-center py-1'
                >
                    Save
                </button>
                
            </form>

            <button
                onClick={closeModal}
                className='w-[95%] bg-[#ddd] mt-2 py-1 px-4 rounded-md font-medium text-lg text-center hover:bg-slate-400 transition-all duration-200'
            >
                Cancel
            </button>
        </div>
    </div>
  )
}

export default EventForm
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';

const EventForm = ({eventDate, setEventDate, handleEvents}) => {

    const [formData, setFormData] = useState({
        id: Date.now(),
        eventName:'',
        startTime: '',
        endTime: '',
        location: ''
    });

    function changeHandler(event){
        const {name, value} = event.target;

        setFormData( (prev) => {
            return{
                ...prev,
                [name]: value
            };
        });

    }

    function submitHandler(event){
        event.preventDefault();
        const eventData = {
            ...formData,
            dateOfEvent : eventDate
        }
        handleEvents(eventData);
        toast.success('Event Saved Successfully');
        setEventDate('');
    }

    function cancelEvent(){
        setEventDate('');
    }

    const val = `${eventDate.date} ${eventDate.month} ${eventDate.year}`

  return (
    <div>
        <div>
            <button
                onClick={cancelEvent}
            >Cancel</button>
            <h2>For Date: {`${val}`}</h2>
            <form 
                onSubmit={(event) => submitHandler(event)}
                className='flex flex-col justify-center gap-4'
            >
                
                <div className='flex flex-col justify-center gap-2'>
                    <label htmlFor='eventName'>Event Name</label>
                    <input 
                        id='eventName'
                        type='text'
                        name='eventName'
                        onChange={(event) => changeHandler(event)}
                        value={formData.eventName}
                        placeholder='Client Meeting'
                        required
                    />
                </div>
                <fieldset className=''>
                    <legend>Select Time</legend>
                    <div>
                        <label htmlFor='startTime'>Start Time</label>
                        <input 
                            id='startTime'
                            type='time'
                            name='startTime'
                            onChange={(event) => changeHandler(event)}
                            value={formData.startTime}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='endTime'>End Time</label>
                        <input 
                            id='endTime'
                            type='time'
                            name='endTime'
                            onChange={(event) => changeHandler(event)}
                            value={formData.endTime}
                            required
                        />
                    </div>
                    
                </fieldset>
                <div className='flex flex-col'>
                    <label htmlFor='location'>Add Location</label>
                    <input 
                        id='location'
                        type='text'
                        name='location'
                        onChange={(event) => changeHandler(event)}
                        value={formData.location}
                        placeholder='1/2 MalharGanj, Indore'
                    />
                </div>
                
                <button>Save</button>
                
            </form>
        </div>
    </div>
  )
}

export default EventForm
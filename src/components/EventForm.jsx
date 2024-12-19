import React, { useState } from 'react'

const EventForm = () => {

    const [formData, setFormData] = useState({
        eventName:'',

    });

    function changeHandler(event){
        console.log(event.target.value);
        const {name, value} = event.target;

        setFormData( (prev) => {
            return{
                ...prev,
                [name]: value
            };
        })
    }

  return (
    <div>
        <div>
            <form className='flex flex-col justify-center gap-4'>
                <div className='flex flex-col justify-center gap-2'>
                    <label htmlFor='eventName'>Event Name</label>
                    <input 
                        type='text'
                        name='eventName'
                        onChange={(event) => changeHandler(event)}
                        value={formData.eventName}
                        placeholder='Client Meeting'
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default EventForm
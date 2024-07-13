// export default function Availability() {
//     return (
//         <div>
//             <h1>Availability</h1>
//         </div>
//     )
// }

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Availability({ onSave }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timeSlots, setTimeSlots] = useState({ start: '09:00', end: '17:00' });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        const { name, value } = event.target;
        setTimeSlots(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // Prepare data to be saved
        onSave({
            date: selectedDate,
            slots: timeSlots
        });
    };

    return (
        <div>
            <h3>Set your availability</h3>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
            <div>
                <label>Start Time:
                    <input type="time" name="start" value={timeSlots.start} onChange={handleTimeChange} />
                </label>
                <label>End Time:
                    <input type="time" name="end" value={timeSlots.end} onChange={handleTimeChange} />
                </label>
            </div>
            <button onClick={handleSubmit}>Save Availability</button>
        </div>
    );
}

export default Availability;

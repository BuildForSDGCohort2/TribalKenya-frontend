/* eslint-disable init-declarations */
import React, { useEffect, useState } from 'react';

const TimeTrekPosted = ({ timePosted }) => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const updateTime = () => {
    const dateTime = new Date(timePosted);
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
    setDate(dateTime.getDate());
    setMonth(months[dateTime.getMonth()]);
    setYear(dateTime.getFullYear());
    setHours(dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours());
    setMinutes(dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes());
  };
  useEffect(() => {
    updateTime();
  }, [timePosted]);
  return (
        <div className="time-trek-posted mt-2 left">
            <span>{date} {month} {year} | {hours}:{minutes}</span>
        </div>
  );
};

export default TimeTrekPosted;

import React from "react";
import "./App.css";

export default function TodaysDate(props) {
    let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if(hour <10){
        hour = `0${hour}`
    }
    return(
    <div>
        {day}: {hour}:{minutes}
    </div>);
}
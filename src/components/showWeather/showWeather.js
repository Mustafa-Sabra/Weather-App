import React from "react";

let ShowWeather =(props)=>{
    return(
         <div class="showInfo">
            {props.obj.temperature?<p>temperature: {props.obj.temperature}</p>:false}
            {props.obj.humidity?<p>humidity: {props.obj.humidity}</p>:false}
            {props.obj.city?<p>city: {props.obj.city}</p>:false}
            {props.obj.country?<p>country: {props.obj.country}</p>:false}
            <p>{props.obj.error}</p>
         </div>
    )
}
export default ShowWeather;
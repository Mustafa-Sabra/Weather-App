import React from "react";

 let Form  =(props)=>{
    return(
          <form onSubmit={props.getWeatherInfo}>
            <input placeholder="Enter your Country..." id="country" type="text"></input>
            <input placeholder="Enter your city..." id="city" type="text"></input>
            <button>Get Weather</button>
          </form>
    )
}
    

export default Form;
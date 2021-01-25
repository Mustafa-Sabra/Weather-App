import React, {Component} from "react";
import Form from "./components/form/form";
import ShowWeather from "./components/showWeather/showWeather";

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const Api_key = "70d67f33ee5ca064f6c4c5787c4ed862";
class App extends Component {
state={
  temperature:"",
  humidity:"",
  country: "",
  city:"",
  error: ""
}
  getWeatherInfo= async(e)=>{
    e.preventDefault();
    let country = e.target.country.value;
    let city = e.target.city.value;
    if(city && country){
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Api_key}`)
      const data =await api.json();
      this.setState({
        temperature:data.main.temp,
        humidity:data.main.humidity,
        country:data.sys.country,
        city:data.name,
        error:"",
      })
    }else{
      this.setState({
        temperature:"",
        humidity:"",
        country:"",
        city:"",
        error:"These fields cannot be empty",
      })
    }
    
    console.log(this.state)
  }

  render(){
    return (
      <div className="App">
          <Form getWeatherInfo={this.getWeatherInfo}/>
          <ShowWeather obj ={this.state}/>
      </div>
    );
  }
  
}

export default App;

import React from "react";

class HurlyWeather extends React.Component{
         

    render(){
        let hourly = this.props?.api?.hourly?.map((item) => {
            const options = { weekday: "short", month: "short", day: "numeric" };
            let hour = new Date(item.dt * 1000).getHours();
            let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
            let temp = Math.round(item.temp);
            let img = (
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
            );
            return{
                hour,
                day,
                temp:temp,
                img:img
            }
            
          });

          let sevenDays = this.props?.api?.daily?.map((item) => {
            const options = { weekday: "short", month: "short", day: "numeric" };
            let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
            let temp_min = Math.round(item.temp.min);
            let temp_max = Math.round(item.temp.max);
            let img = (
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
            );
            return{
                day,
                temp_min,
                temp_max,
                img

            }
            
          });
          console.log(this.props.exclude)
        return(
            <>
                {this.props.exclude === "hourly" &&
                    
                <div>
                <div>Погода на ближайшие 48 часов:</div>
                <div>
                    {hourly?.map((item)=>
                    <ul>
                        <li>
                            {item.day}&nbsp;&nbsp;{item.hour}:00&nbsp;&nbsp;{item.temp}&deg;C &nbsp;&nbsp;<span>{item.img}</span>
                        </li>
                    </ul>)}
                </div>
                </div>
    }
                    
                
                 {this.props.exclude === "daily" &&
                    
                  <div>
                    <div> Погода на ближайшие 7 дней:</div>
                    <div>
                        {sevenDays?.map((item)=>
                        <ul>
                            <li>
                            {item.day}&nbsp;&nbsp;{item.temp_max}<sup>&deg;C</sup> / {item.temp_min}<sup>&deg;C</sup>
                             &nbsp;&nbsp;<span>{item.img}</span>
                            </li>
                        </ul>
                        )}
                        </div>
                        </div>
                 }
                
                
            </>
            
        )
    }
}


export default HurlyWeather
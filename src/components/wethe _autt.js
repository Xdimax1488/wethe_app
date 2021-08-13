import React from "react";


class WetheAutt extends React.Component{

    //let icon = this.props.date.weather.map(item) => (item.icon);

    render(){
        let icon = this.props?.api?.current?.weather?.map((item) => item.icon);
        return (
            <>
            { this.props.city &&
            <div>
                <p>Место положения: {this.props.city}</p>
                <img
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt= {this.props?.api?.current?.weather.map((item) => item.description)}
                />
                
                <p> описание: {this.props?.api?.current?.weather.map((item) => item.description)}</p>
                <p>Температура:{this.props.temp}&deg;C /&nbsp;</p>
                <p>Давление:{this.props.pressure}</p>

             </div>
            }
            </>
        );
    }
}

export default WetheAutt
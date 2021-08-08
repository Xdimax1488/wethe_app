import React from "react";


class Wethe_aut extends React.Component{
    render(){
        return (
            <>
            { this.props.city &&
            <div>
                <p>Место положения: {this.props.city}</p>
                <p>Температура:{this.props.temp}</p>
                <p>Давление:{this.props.pressure}</p>

             </div>
            }
            </>
        );
    }
}

export default Wethe_aut
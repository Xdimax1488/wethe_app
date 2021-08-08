import React from "react";



class Form extends React.Component{
    

    render(){
        return (
            <form onSubmit= {this.props.wetherMetod} style ={{width: '100%', color: 'green',display:'flex'}}>
                <p style={{ marginLeft: '20px'}}>
                  <select size="3" multiple name="exclude" >
                    <option disabled>Выбирете позицыю</option>
                    <option value="current">сейчас</option>
                    <option value="daily">на этой неделе</option>
                    <option value="hourly">ближайшие два дня </option>
                  </select>
                </p>
                <p>
                  <select size="3" multiple name="city" >
                    <option disabled>Выберете город</option>
                    <option value="London" >лондон</option>
                    <option value="Moscow">москва</option>
                    <option value="Kiev">киев</option>
                    <option value="Warshawa">Варш</option>
                  </select>
                </p>

                <button> кнопка </button>
            </form>
        );
    }
}

export default Form
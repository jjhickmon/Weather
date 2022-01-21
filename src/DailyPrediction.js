import React from 'react';

export default class HourlyPrediction extends React.Component {
    render() {
        return (
            <div className="daily">
                {this.props.daily.map(
                    function(daily, index) {
                        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        if (1 <= index && index < 7) {
                            var date = new Date(daily.dt * 1000);
                            var day = date.getDay();
                            return (
                                <div className="day" key={index}>
                                    <div className="name">
                                        <p>
                                            {days[day]}
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src={"https://openweathermap.org/img/wn/"+daily.weather[0].icon+"@2x.png"} alt="weather icon"/>
                                    </div>
                                    <div className="POP">
                                            {Math.round(daily.pop*100)+"%"}
                                    </div>
                                    <div className="max">
                                        <p>
                                            {Math.round(daily.temp.max)}
                                        </p>
                                    </div>
                                    <div className="min">
                                        <p>
                                            {Math.round(daily.temp.min)}
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }
                )}
            </div>
        );
    }
}
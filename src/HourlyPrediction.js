import React from 'react';

export default class HourlyPrediction extends React.Component {
    render() {
        return (
            <div className="hourly">
                {this.props.hourly.map(
                    function(hourly, index) {
                        if (index < 24) {
                            var date = new Date(hourly.dt * 1000);
                            var hours = date.getHours();
                            var ampm = hours >= 12 ? 'pm' : 'am';
                            hours = hours % 12 ? hours % 12 : 12;
                            return (
                                <div key={index}>
                                    <p className="forecast-time">
                                        {index === 0 ? "Now" : hours + ampm}
                                    </p>
                                    <p className="POP">
                                        {hourly.pop*100 >= 30 ? Math.round(hourly.pop*100)+"%" : "-"}
                                    </p>
                                    <img src={"https://openweathermap.org/img/wn/"+hourly.weather[0].icon+"@2x.png"} alt="weather icon"/>
                                    <p className="forecast-temp">
                                        {Math.round(hourly.temp)}°
                                    </p>
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
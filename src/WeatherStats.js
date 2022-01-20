import React from 'react';

export default class HourlyPrediction extends React.Component {    
    getSunrise() {
        var date = new Date(this.props.current.sunrise * 1000);
        var sunrise = date.getHours();
        var ampm = sunrise >= 12 ? 'pm' : 'am';
        sunrise = sunrise % 12 ? sunrise % 12 : 12;
        sunrise += date.getMinutes() < 10 ? ":0" + date.getMinutes() : ":" + date.getMinutes();
        return (
            <p>
                {sunrise + ampm}
            </p>
        );
    }

    getSunset() {
        var date = new Date(this.props.current.sunset * 1000);
        var sunset = date.getHours();
        var ampm = sunset >= 12 ? 'pm' : 'am';
        sunset = sunset % 12 ? sunset % 12 : 12;
        sunset += date.getMinutes() < 10 ? ":0" + date.getMinutes() : ":" + date.getMinutes();
        return (
            <p>
                {sunset + ampm}
            </p>
        );
    }

    getWind() {
        var theta = Math.round(((this.props.current.wind_deg/45.0)+.5));
        var directions =["N","NE","E", "SE","S","SW","W","NW"]
        return (
            <p>
                {directions[(theta % 8)] + " " + this.props.current.wind_speed + "mph"}
            </p>
        );
    }

    render() {
        return (
            <div className="weather-stats">
                <section>
                    <div className="sunrise">
                        <h6>Sunrise</h6>
                        {this.getSunrise()}
                    </div>
                    <div className="sunset">
                        <h6>Sunset</h6>
                        {this.getSunset()}
                    </div>
                </section>
                <section>
                    <div className="POP">
                        <h6>Chance of Rain</h6>
                        <p>
                            {(this.props.daily[0].pop * 100) + "%"}
                        </p>
                    </div>
                    <div className="humididty">
                        <h6>Humididty</h6>
                        <p>
                            {this.props.current.humidity + "%"}
                        </p>
                    </div>
                </section>
                <section>
                    <div className="wind">
                        <h6>Wind</h6>
                        {this.getWind()}
                    </div>
                    <div className="feels-like">
                        <h6>Feels Like</h6>
                        <p>
                            {Math.round(this.props.current.feels_like) + "°"}
                        </p>
                    </div>
                </section>
                <section>
                    <div className="Precipitation">
                        <h6>Precipitation</h6>
                        <p>
                            {(this.props.daily[0].rain ? this.props.daily[0].rain : 0) + " in"}
                        </p>
                    </div>
                    <div className="Pressure">
                        <h6>Pressure</h6>
                        <p>
                            {(Math.round(this.props.current.pressure / 33.863886666667 * 100) / 100) + " inHg"}
                        </p>
                    </div>
                </section>
                <section>
                    <div className="visibility">
                        <h6>Visibility</h6>
                        <p>
                            {Math.round(this.props.current.visibility * 0.000621371) + " mi"}
                        </p>
                    </div>
                    <div className="uvi">
                        <h6>UV Index</h6>
                        <p>
                            {this.props.current.uvi}
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}
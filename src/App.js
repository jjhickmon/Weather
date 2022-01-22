import React from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import HourlyPrediction from './HourlyPrediction.js';
import DailyPrediction from './DailyPrediction.js';
import WeatherStats from './WeatherStats.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getCity = this.getCity.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.setTheme = this.setTheme.bind(this);
        this.state = {
            city: "Seattle",
            latitude: 47.6546964,
            longitude: -122.3117811,
            current: {temp: 0, weather: [{description: ""}], wind_speed: 0},
            hourly: [],
            daily: [{temp: {min: 0, max: 0}}]
        };
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("Longitude is :", position.coords.longitude);
            console.log("Latitude is :", position.coords.latitude);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }

    updateWeather() {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q='+this.state.city+'&appid=b5b4f0115cb376736a2f740df42c821b')
        .then(data => data.json())
        .then(data => {
            this.setState({
                latitude: data[0].lat,
                longitude: data[0].lon
            });
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+this.state.latitude+'&lon='+this.state.longitude+'&units=imperial&appid=b5b4f0115cb376736a2f740df42c821b')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    current: response.current,
                    hourly: response.hourly,
                    daily: response.daily
                });
            })
        })
    }

    componentDidMount() {
        this.getLocation();
        this.updateWeather();
    }

    load() {
        if (document.head.querySelector('meta[name="theme"]').content === "light") {
            document.documentElement.style.setProperty('--primary-color', 'var(--cream)');
            document.documentElement.style.setProperty('--secondary-color', 'var(--dark-blue)');
            document.documentElement.style.setProperty('--tertiary-color', 'var(--dark-grey)');
            document.documentElement.style.setProperty('--primary-accent-color', 'var(--light-blue)');
            document.documentElement.style.setProperty('--secondary-accent-color', 'var(--light-grey)');
        } else {
            document.documentElement.style.setProperty('--primary-color', 'var(--dark-blue)');
            document.documentElement.style.setProperty('--secondary-color', 'var(--cream)');
            document.documentElement.style.setProperty('--tertiary-color', 'var(--light-grey)');
            document.documentElement.style.setProperty('--primary-accent-color', 'var(--bright-blue)');
            document.documentElement.style.setProperty('--secondary-accent-color', 'var(--dark-blue)');
        }
        
    }
    
    getCity(city) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=b5b4f0115cb376736a2f740df42c821b';
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error: '+city+' is not a city in the openweathermap api database');
            }
        })
        .then(response => {
            this.setState({city: city});
            this.updateWeather();
        }).catch((error) => {
            console.log(error);
        });

    }

    setTheme() {
        if (document.head.querySelector('meta[name="theme"]').content === "light") {
            document.head.querySelector('meta[name="theme"]').content = "dark";
        } else {
            document.head.querySelector('meta[name="theme"]').content = "light";
        }
        this.load();
    }

    render() {
        return (
            <div className="App">
                <div className="search">
                    <SearchBar id="search-bar" city={this.getCity}/>
                    <button id="theme-switch" onClick={this.setTheme}>theme</button>
                </div>
                <main>
                    <div className="header">
                        <p id="city">
                            {this.state.city}
                        </p>
                        <p id="weather">
                            {this.state.current.weather[0].description}
                        </p>
                    </div>
                    <div className="curr-temp">
                        <p id="temp">
                            {Math.round(this.state.current.temp)}°F
                        </p>
                        <div className="low-high">
                            <p id="temp_min">
                                L: {Math.round(this.state.daily[0].temp.min)}°
                            </p>
                            <p id="temp_max">
                                H: {Math.round(this.state.daily[0].temp.max)}°
                            </p>
                        </div>
                    </div>
                </main>
                <div className="data">
                    <HourlyPrediction id="hourly" hourly={this.state.hourly}/>
                    <DailyPrediction id="daily" daily={this.state.daily}/>
                    <WeatherStats id="weather-stats" current={this.state.current} daily={this.state.daily}/>
                </div>
            </div>
        );
    }
}

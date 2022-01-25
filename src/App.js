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
        this.updateWeather = this.updateWeather.bind(this);
        this.setWeather = this.setWeather.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.load = this.load.bind(this);
        this.showPage = this.showPage.bind(this);
        this.setTheme = this.setTheme.bind(this);
        this.state = {
            city: "",
            cookies: false,
            location: [],
            current: {temp: 0, weather: [{description: ""}], wind_speed: 0},
            hourly: [],
            daily: [{temp: {min: 0, max: 0}}]
        };
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                cookies: true,
                location: [position.coords.latitude, position.coords.longitude]
            }, () => this.updateWeather());
        }, this.updateWeather());
    }

    updateWeather() {
        console.log(this.state.location);
        if (this.state.location.length === 0) {
            console.log("no location data provided");
            if (this.state.city === "") {
                this.setState({
                    city: "Kingston"
                }, () => this.setWeather());
            } else {
                console.log("hi" + this.state.city);
                this.setWeather();
            }
        } else {
            fetch('http://api.openweathermap.org/geo/1.0/reverse?lat='+this.state.location[0]+'&lon='+this.state.location[1]+'&limit=1&appid=b5b4f0115cb376736a2f740df42c821b')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    city: data[0].name
                }, () => this.setWeather());
            });
        }
    }

    setWeather() {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q='+this.state.city+'&appid=b5b4f0115cb376736a2f740df42c821b')
        .then(data => data.json())
        .then(data => {
            this.setState({
                location: [data[0].lat, data[0].lon]
            });
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+this.state.location[0]+'&lon='+this.state.location[1]+'&units=imperial&appid=b5b4f0115cb376736a2f740df42c821b')
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
        document.getElementById('body').onload = this.load();
        this.getLocation();
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

    load() {
        const pallette = ['--primary-color', '--secondary-color', '--tertiary-color', '--primary-accent-color', '--primary-shading-color', '--secondary-shading-color'];
        const light = ['var(--cream)', 'var(--dark-blue)', 'var(--light-blue)', 'var(--light-grey)', 'var(--transparent)', 'var(--translucent-white2)'];
        const dark = ['var(--dark-blue)', 'var(--cream)', 'var(--dark-blue)', 'var(--darker-blue)', 'var(--translucent-black)', 'var(--translucent-white1)'];
        const brown = ['var(--cream)', 'var(--brown5)', 'var(--brown5)', 'var(--brown3)', 'var(--transparent)', 'var(--translucent-white2)'];
        const green = ['var(--cream)', 'var(--green6)', 'var(--green5)', 'var(--green4)', 'var(--transparent)', 'var(--translucent-white2)'];
        const themes = {"light":light, "dark":dark, "brown":brown, "green":green};
        for (let theme in themes){
            if (document.head.querySelector('meta[name="theme"]').content === theme) {
                for (let i = 0; i < pallette.length; i++) {
                    document.documentElement.style.setProperty(pallette[i], themes[theme][i]);
                }
            }
        }
        setTimeout(this.showPage, 4000);
    }

    showPage() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("root").style.display = "block";
    }  

    setTheme() {
        const themes = ["light", "dark", "brown", "green"];
        document.head.querySelector('meta[name="theme"]').content = 
            themes[(themes.indexOf(document.head.querySelector('meta[name="theme"]').content) + 1) % themes.length];
        this.load();
    }

    render() {
        return (
            <div className="App">
                <div className="search">
                    <SearchBar id="search-bar" city={this.getCity}/>
                    <button id="theme-switch" onClick={this.setTheme}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/sun--v1.png" alt="theme icon"/>
                    </button>
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

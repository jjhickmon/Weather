(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(8),s=n.n(r),c=(n(13),n(3)),o=n(4),h=n(2),l=n(6),d=n(5),u=(n(14),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e))._handleKeyDown=a._handleKeyDown.bind(Object(h.a)(a)),a.getVal=a.getVal.bind(Object(h.a)(a)),a.state={input:""},a}return Object(o.a)(n,[{key:"_handleKeyDown",value:function(e){"Enter"===e.key&&this.getVal()}},{key:"getVal",value:function(){var e=document.querySelector("input").value,t=e.split(" ");e=t.map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),this.props.city(e)}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("input",{onKeyDown:this._handleKeyDown,type:"text",id:"search-bar",placeholder:"Search Your City Here"})})}}]),n}(i.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"hourly",children:this.props.hourly.map((function(e,t){if(t<24){var n=new Date(1e3*e.dt).getHours(),a=n>=12?"pm":"am";return n=n%12?n%12:12,Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"forecast-time",children:0===t?"Now":n+a}),Object(u.jsx)("p",{className:"POP",children:100*e.pop>=30?Math.round(100*e.pop)+"%":"-"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",alt:"weather icon"}),Object(u.jsxs)("p",{className:"forecast-temp",children:[Math.round(e.temp),"\xb0"]})]},t)}return null}))})}}]),n}(i.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"daily",children:this.props.daily.map((function(e,t){if(1<=t&&t<7){var n=new Date(1e3*e.dt).getDay();return Object(u.jsxs)("div",{className:"day",children:[Object(u.jsx)("div",{className:"name",children:Object(u.jsx)("p",{children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]})}),Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",alt:"weather icon"})}),Object(u.jsx)("div",{className:"POP",children:Math.round(100*e.pop)+"%"}),Object(u.jsx)("div",{className:"max",children:Object(u.jsx)("p",{children:Math.round(e.temp.max)})}),Object(u.jsx)("div",{className:"min",children:Object(u.jsx)("p",{children:Math.round(e.temp.min)})})]},t)}return null}))})}}]),n}(i.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getSunrise",value:function(){var e=new Date(1e3*this.props.current.sunrise),t=e.getHours(),n=t>=12?"pm":"am";return t=t%12?t%12:12,t+=e.getMinutes()<10?":0"+e.getMinutes():":"+e.getMinutes(),Object(u.jsx)("p",{children:t+n})}},{key:"getSunset",value:function(){var e=new Date(1e3*this.props.current.sunset),t=e.getHours(),n=t>=12?"pm":"am";return t=t%12?t%12:12,t+=e.getMinutes()<10?":0"+e.getMinutes():":"+e.getMinutes(),Object(u.jsx)("p",{children:t+n})}},{key:"getWind",value:function(){var e=Math.round(this.props.current.wind_deg/45+.5);return Object(u.jsx)("p",{children:["N","NE","E","SE","S","SW","W","NW"][e%8]+" "+this.props.current.wind_speed+"mph"})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"weather-stats",children:[Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"sunrise",children:[Object(u.jsx)("h6",{children:"Sunrise"}),this.getSunrise()]}),Object(u.jsxs)("div",{className:"sunset",children:[Object(u.jsx)("h6",{children:"Sunset"}),this.getSunset()]})]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"POP",children:[Object(u.jsx)("h6",{children:"Chance of Rain"}),Object(u.jsx)("p",{children:Math.round(100*this.props.daily[0].pop)+"%"})]}),Object(u.jsxs)("div",{className:"humididty",children:[Object(u.jsx)("h6",{children:"Humididty"}),Object(u.jsx)("p",{children:this.props.current.humidity+"%"})]})]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"wind",children:[Object(u.jsx)("h6",{children:"Wind"}),this.getWind()]}),Object(u.jsxs)("div",{className:"feels-like",children:[Object(u.jsx)("h6",{children:"Feels Like"}),Object(u.jsx)("p",{children:Math.round(this.props.current.feels_like)+"\xb0"})]})]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"Precipitation",children:[Object(u.jsx)("h6",{children:"Precipitation"}),Object(u.jsx)("p",{children:(this.props.daily[0].rain?this.props.daily[0].rain:0)+" in"})]}),Object(u.jsxs)("div",{className:"Pressure",children:[Object(u.jsx)("h6",{children:"Pressure"}),Object(u.jsx)("p",{children:Math.round(this.props.current.pressure/33.863886666667*100)/100+" inHg"})]})]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"visibility",children:[Object(u.jsx)("h6",{children:"Visibility"}),Object(u.jsx)("p",{children:Math.round(621371e-9*this.props.current.visibility)+" mi"})]}),Object(u.jsxs)("div",{className:"uvi",children:[Object(u.jsx)("h6",{children:"UV Index"}),Object(u.jsx)("p",{children:this.props.current.uvi})]})]})]})}}]),n}(i.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getCity=a.getCity.bind(Object(h.a)(a)),a.updateWeather=a.updateWeather.bind(Object(h.a)(a)),a.setWeather=a.setWeather.bind(Object(h.a)(a)),a.getLocation=a.getLocation.bind(Object(h.a)(a)),a.load=a.load.bind(Object(h.a)(a)),a.showPage=a.showPage.bind(Object(h.a)(a)),a.setTheme=a.setTheme.bind(Object(h.a)(a)),a.state={city:"",cookies:!1,location:[],current:{temp:0,weather:[{description:""}],wind_speed:0},hourly:[],daily:[{temp:{min:0,max:0}}]},a}return Object(o.a)(n,[{key:"getLocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({cookies:!0,location:[t.coords.latitude,t.coords.longitude]},(function(){return e.updateWeather()}))}),this.updateWeather())}},{key:"updateWeather",value:function(){var e=this;console.log(this.state.location),0===this.state.location.length?(console.log("no location data provided"),""===this.state.city?this.setState({city:"Kingston"},(function(){return e.setWeather()})):(console.log("hi"+this.state.city),this.setWeather())):fetch("http://api.openweathermap.org/geo/1.0/reverse?lat="+this.state.location[0]+"&lon="+this.state.location[1]+"&limit=1&appid=b5b4f0115cb376736a2f740df42c821b").then((function(e){return e.json()})).then((function(t){e.setState({city:t[0].name},(function(){return e.setWeather()}))}))}},{key:"setWeather",value:function(){var e=this;fetch("https://api.openweathermap.org/geo/1.0/direct?q="+this.state.city+"&appid=b5b4f0115cb376736a2f740df42c821b").then((function(e){return e.json()})).then((function(t){e.setState({location:[t[0].lat,t[0].lon]}),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+e.state.location[0]+"&lon="+e.state.location[1]+"&units=imperial&appid=b5b4f0115cb376736a2f740df42c821b").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({current:t.current,hourly:t.hourly,daily:t.daily})}))}))}},{key:"componentDidMount",value:function(){document.getElementById("body").onload=this.load(),this.getLocation()}},{key:"getCity",value:function(e){var t=this;fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=b5b4f0115cb376736a2f740df42c821b").then((function(t){if(t.ok)return t.json();throw new Error("Error: "+e+" is not a city in the openweathermap api database")})).then((function(n){t.setState({city:e}),t.updateWeather()})).catch((function(e){console.log(e)}))}},{key:"load",value:function(){var e=["--primary-color","--secondary-color","--tertiary-color","--primary-accent-color","--primary-shading-color","--secondary-shading-color"],t={light:["var(--cream)","var(--dark-blue)","var(--light-blue)","var(--light-grey)","var(--transparent)","var(--translucent-white2)"],dark:["var(--dark-blue)","var(--cream)","var(--dark-blue)","var(--darker-blue)","var(--translucent-black)","var(--translucent-white1)"],brown:["var(--cream)","var(--brown5)","var(--brown5)","var(--brown3)","var(--transparent)","var(--translucent-white2)"],green:["var(--cream)","var(--green6)","var(--green5)","var(--green4)","var(--transparent)","var(--translucent-white2)"]};for(var n in t)if(document.head.querySelector('meta[name="theme"]').content===n)for(var a=0;a<e.length;a++)document.documentElement.style.setProperty(e[a],t[n][a]);setTimeout(this.showPage,4e3)}},{key:"showPage",value:function(){document.getElementById("preloader").style.display="none",document.getElementById("root").style.display="block"}},{key:"setTheme",value:function(){var e=["light","dark","brown","green"];document.head.querySelector('meta[name="theme"]').content=e[(e.indexOf(document.head.querySelector('meta[name="theme"]').content)+1)%e.length],this.load()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)(j,{id:"search-bar",city:this.getCity}),Object(u.jsx)("button",{id:"theme-switch",onClick:this.setTheme,children:Object(u.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/sun--v1.png",alt:"theme icon"})})]}),Object(u.jsxs)("main",{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("p",{id:"city",children:this.state.city}),Object(u.jsx)("p",{id:"weather",children:this.state.current.weather[0].description})]}),Object(u.jsxs)("div",{className:"curr-temp",children:[Object(u.jsxs)("p",{id:"temp",children:[Math.round(this.state.current.temp),"\xb0F"]}),Object(u.jsxs)("div",{className:"low-high",children:[Object(u.jsxs)("p",{id:"temp_min",children:["L: ",Math.round(this.state.daily[0].temp.min),"\xb0"]}),Object(u.jsxs)("p",{id:"temp_max",children:["H: ",Math.round(this.state.daily[0].temp.max),"\xb0"]})]})]})]}),Object(u.jsxs)("div",{className:"data",children:[Object(u.jsx)(p,{id:"hourly",hourly:this.state.hourly}),Object(u.jsx)(b,{id:"daily",daily:this.state.daily}),Object(u.jsx)(m,{id:"weather-stats",current:this.state.current,daily:this.state.daily})]})]})}}]),n}(i.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.54168ac4.chunk.js.map
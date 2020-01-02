
import axios from 'axios';
import geralt from './images/geralt.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import CreateNew from "./components/CreateNew.component";
import Search from "./components/Search.component";
import ShowAll from "./components/ShowAll.component";
import './App.css';

export default class apis extends React.Component {
  state = {
    weather: [],
    location: [],
    temp: [],
    icon: [],
    search: ''
  }

  componentDidMount() {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Brisbane,au&appid=33517b3884fc22bf3c44b3c37a46344f`)
      .then(res => {
        const weather = res.data.weather[0].description;
        this.setState({ weather });
        const location = res.data.name;
        this.setState({ location });
        const temp = res.data.main.temp;
        this.setState({ temp });
        const icon = res.data.weather[0].icon;
        this.setState({ icon });
      })
  }

  render() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 




today = dd + ` ` + months[mm] + ' ' + yyyy;
    const containerStyle = {
      margin: '0 !important',
      padding: `0`,
      width: '100%',
      height: '10%',
      backgroundRepeat: `no-repeat`,
      backgroundSize: `110%`,
      textAlign: `center`,
      backgroundColor: `#C4C4C4`,
      boxShadow: `4px 4px 4px rgba(0, 0, 0, 0.25)`
    }

    const icon = {
      height: `50px`,
      width: `50px`
    }

    const headingStyle = {
      margin: `0`, 
      fontStyle: `normal`,
      fontWeight: `900`,
      fontSize: `150px`,
      lineHeight: `250.69%`,
      letterSpacing: `0.155em`,
      textIndent: `38px`,
      color: `#FFFFFF`,
      textShadow: `2px 2px 3px black`
    }
    const weatherStyle = {
      fontSize: `30px`,
      textAlign: `right`,
      color: `black`,
      margin: `0`,
      padding: `1%`,
      backgroundColor: `C4C4C4`,
    }

    const smallHeadingStyle = {
      fontSize: `20px`,
      opacity: 1 + ` !important`,
      paddingBottom: `1%`,
      paddingLeft: `2%`,
      textAlign: `right`,
      margin: `0`,
    }

    const all = {
      height: `100vh`,
      textAlign: `center`,
      width: `auto`,
      backgroundImage: `url(${geralt})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `160vh`,
      backgroundPosition: `center`,
      backgroundColor: `#E5E5E5`,
    }

    const searchbarStyle = {
      fontSize: `30px`,
      width: `150vh`,
      height: `100px`,
      background: `rgba(196, 196, 196, 0.8)`,
      border: `5px solid #FFFFFF`,
      textAlign: `center`,
      boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    }

    const seeAll = {
      fontSize: `30px`,
      width: `73vh`,
      height: `100px`,
      background: `rgba(196, 196, 196, 0.8)`,
      border: `5px solid #FFFFFF`,
      boxSizing: `border-box`,
      borderRadius: `20px`,
      marginTop: `1%`,
      marginLeft: `15px`,
      marginRight: `15px`,
      boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    }

    return (
      <Router>
        <Route path="/search" exact component={Search} />
        <Route path="/all" component={ShowAll} />
        <Route path="/create" component={CreateNew} />


      <div style={all}>
        <div style={containerStyle}>
          
          <p style={weatherStyle}>It's {Math.ceil(this.state.temp - 273)} degrees in {this.state.location}.<span>    </span>
            <img alt="" style={icon} src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
          </p>
                     
        </div>
        <p style={headingStyle}>Hello, Alex</p>
        <input value={this.state.search} type="search" placeholder="Search" style={searchbarStyle}></input>
        <br></br>
        <span>
        <button style={seeAll}>See All</button>
        <button style={seeAll}>Add</button>
        </span>
      </div>
      </Router>


    )
    
  }
}

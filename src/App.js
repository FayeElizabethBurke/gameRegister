import React from 'react';
import axios from 'axios';
import geralt from './images/geralt.png';
import './App.css';


export default class apis extends React.Component {
  state = {
    weather: [],
    location: [],
    temp: [],
    icon: []
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
      backgroundColor: `#C4C4C4`
    }

    const icon = {
      height: `50px`,
      width: `50px`
    }

    const headingStyle = {
      margin: `0`,
      paddingLeft: `200px`,
      position: `absolute`,      
      fontFamily: `Roboto`,
      fontStyle: `normal`,
      fontWeight: `900`,
      fontSize: `150px`,
      lineHeight: `218.69%`,
      /* or 394px */
      letterSpacing: `0.155em`,
      textIndent: `38px`,
      color: `#000000`
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
      width: `auto`,
      backgroundImage: `url(${geralt})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `160vh`,
      backgroundPosition: `center`,
      backgroundColor: `#E5E5E5`
    }

    return (
      <div style={all}>
        <div style={containerStyle}>
          
          <p style={weatherStyle}>It's {Math.ceil(this.state.temp - 273)} degrees in {this.state.location}.<span>    </span>
            <img alt="" style={icon} src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
            
          </p>
                     
        </div>
      </div>

    )
    
  }
}

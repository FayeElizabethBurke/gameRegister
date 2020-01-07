import React, { Component } from 'react';
import luigi from '../images/luigi.png';
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateNew extends Component {
    render() {
//styling
const createNewDiv = {
    height: `80vh`,
    backgroundImage: `url(${luigi})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
}

const content= {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }

const exitButton = {
    fontSize: `30px`,
    width: `auto`,
    height: `auto`,
    padding: `1vh`,
    background: `rgba(196, 196, 196, 0.8)`,
    border: `5px solid #FFFFFF`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    marginTop: `1%`,
    marginLeft: `15px`,
    marginRight: `15px`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    position: `absolute`,
    top: `0`,
    right: `0`
}

    return (
<div style={createNewDiv}>
    <div style={content}>
    <span>
        <a href="http://localhost:3000/" ><button style={exitButton}>Back</button></a>
    </span>
    </div>

</div>
        )
    }
  }
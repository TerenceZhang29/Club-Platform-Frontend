import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../css/cupInfo.css'

class CupInfo extends Component {

    render() {
        return (
            <body>
            <div class="top">
                <img src={require('./hack.png')}></img>
                <div class="header">
                    <h2>Big Red Hacks</h2>
                    <label>Jun 1st - Jun 3rd, 2020</label>
                    <div class="button">
                        <button>Register</button>
                        <button>Interested</button>
                    </div>
                </div>
            </div>

            <div class="middle">
                <p>BigRed//Hacks is the oldest student-run, large-scale hackathon at Cornell University.
                   Across three days, Cornell and non-Cornell students alike gather to build the coolest 
                   and most innovative projects, meet amazing people, and win some prizes along the way!
                </p>
                <div class="info">
                    <label>Link</label>
                    <label>Email</label>
                    <label>Phone</label>
                    <label>Location</label>
                </div>
            </div>

            <div class="bottom">
                <h4>Who is going?</h4>
                <p>Ruiqi Zhu, Hantian Zhang, Haocheng Shen, Chenyu Wei, Yang Shen</p>
            </div>
            </body>
        );
    }
}

export default CupInfo;
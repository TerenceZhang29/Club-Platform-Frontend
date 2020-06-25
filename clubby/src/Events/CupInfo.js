import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class CupInfo extends Component {

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2>Welcome to Cornell Cup Robotics!</h2>
                    <button>Register</button>
                    <label>About</label>
                    <p>Cornell Cup Robotics is a student run organization at Cornell University that designs, 
                       manufactures, and creates innovative robotics oriented projects. Over 50 Cornell 
                       students work to create dynamic projects that bolster the ingenuity of embedded 
                       technologies. Since 2010, our projects have been showcased at many conferences and we 
                       have received support from numerous robotics and technology companies.

                       The objective of this team is to provide a valuable, practical experience for students
                       with robotics and embedded systems, and to demonstrate the extraordinary technology 
                       that we are able to create.</p>
                </div>
            </div>
        );
    }
}

export default CupInfo;
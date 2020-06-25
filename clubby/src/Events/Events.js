import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from './../history';

class Events extends Component {
    constructor(props) {
        super(props);
        this.cupInfo = this.cupInfo.bind(this);
    }

    cupInfo(event) {
        history.push('/cupInfo');
        window.location.reload();
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Event Page</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>AppDev Info Session</ListGroup.Item>
                            <ListGroup.Item onClick={this.cupInfo}>Cup Robotics Info Session</ListGroup.Item>
                            <ListGroup.Item>Drama Society Audition</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Events;
import React, { Component } from 'react';
import '../css/Application.css';
import history from './../history';
// import axios from 'axios';

class Applications extends Component {
    render() {
        return (
            <div class='clubs-page'>
                <ClubList />
                <Filter />
            </div>
        );
    }
}

class Filter extends React.Component {

    renderClickableBox(text) {
        return (
            <div class="filter_check_box">
                <p><a href=""></a>{text}</p>
            </div>
        );
    }

    render() {
        return (
            <div class="filter-container">
                <h2>Filter</h2>
                <div class='subscribed_clubs_filter'>
                    {this.renderClickableBox('Subscribed Clubs')}
                </div>
                <div class='search_bar_filter'>
                    <p>Search</p>
                    <textarea></textarea>
                </div>
                <div class='category_search_filter'>
                    <p>Category</p>
                    <textarea></textarea>
                    <div class='category_list'>
                        {this.renderClickableBox("Engineering")}
                        {this.renderClickableBox("Business")}
                        {this.renderClickableBox("Sport")}
                        {this.renderClickableBox("Pre-law")}
                        {this.renderClickableBox("Art")}
                    </div>

                </div>
                <div class='size_filter'>
                    <p>Club Size</p>
                    <div class='category_list'>
                        {this.renderClickableBox("10-20")}
                        {this.renderClickableBox("20-50")}
                        {this.renderClickableBox("50-100")}
                        {this.renderClickableBox("100-200")}
                    </div>
                </div>
            </div>
        );
    }
}

const pos1 = ["IOS Team", "ends October 2020"]
const pos2 = ["Android Team", "ends October 2020"]
const pos3 = ["Design Team", "ends October 2020"]

class ClubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: []
        }
    };

    render() {
        return (
            <div class="club-list-container">
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/club_logo2.png')} intro={"Cornell Univeristy's open source app development project team"} tags={"Engineering"} position={[pos1, pos2, pos3]} applied={true} />
                <ApplicationButton title={"Cornell Cup Robotics"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={"Engineering"} position={[pos1, pos2, pos3]} applied={false} />
                <ApplicationButton title={"Cornell Chinese Drama Society"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={"Engineering"} position={[pos1, pos2, pos3]} applied={false} />
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={"Engineering"} position={[pos1, pos2, pos3]} applied={false} />
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={"Engineering"} position={[pos1, pos2, pos3]} applied={false} />

            </div>
        );
    }
}

class ApplicationButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            logo: null,
            intro: null,
            tags: null,
            position: null,
            applied: null,
        };
        this.ToClubHomePage = this.ToClubHomePage.bind(this);
    }

    ToClubHomePage(event) {
        console.log("Sheldon")
        history.push('/ClubHome');
        window.location.reload();
    }

    renderApplyBtn() {
        let text = (this.props.applied ? "Applied" : "Apply")
        let style = (this.props.applied ? "apply-btn" : "apply-btn __not-applied")

        return (
            <div class={style}>{text}</div>
        )
    }

    renderAppPostion() {

        var position = []

        for (var i = 0; i < this.props.position.length; i++) {
            position.push(
                <div class='app-position'>
                    <p>{this.props.position[i][0]}</p>
                    <p>{this.props.position[i][1]}</p>
                </div>
            )
        }

        return (
            <div class='position-wrapper'>
                {position}
            </div>
        )
    }


    render() {
        return (
            <div class='club-btn'>

                <div class='club-info-section'>
                    <div class='image-wrapper'><img src={this.props.logo} /></div>

                    <div class='text-wrapper'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.intro}</p>
                        <div class='industry-btn'>{this.props.tags}</div>
                        <div class='more-btn'>
                            <div class='dot' />
                            <div class='dot' />
                            <div class='dot' />
                        </div>
                    </div>
                </div>

                <div class='application-info-section'>
                    {this.renderAppPostion()}
                    {this.renderApplyBtn()}
                </div>
            </div >
        );
    }
}

export default Applications;
import React, { Component } from 'react';
import '../css/Application.css';
import history from './../history';
// import axios from 'axios';

class Applications extends Component {
    render() {
        return (
            <div class="clublistpage">
                <body>
                    <h1>Application</h1>
                    <div class='filter-list-container'>
                        <Filter />
                        <ClubList />
                    </div>
                </body>
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
            <div class="filter">
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

const pos1 = ["IOS Team", "ends on October 2020"]
const pos2 = ["Android Team", "ends on October 2020"]
const pos3 = ["Design Team", "ends on October 2020"]

class ClubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: []
        }

        // this.getAllClubs = this.getAllClubs.bind(this);
        // this.extractData = this.extractData.bind(this);
        // this.getAllClubs();
    };

    // extractData(response) {
    //   var responseData = response.data['data'];
    //   for (var i = 0; i < responseData.length; i++) {
    //     var localClubs = this.state.clubs;
    //     localClubs.push({ title: responseData[i]['name'] });
    //     this.setState({ clubs: localClubs })
    //     console.log("IN EXTRACTDATA:")
    //     console.log(this.state.clubs.length)
    //   }
    // }

    // getAllClubs() {
    //   axios({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:5000/api/clubs',
    //   })
    //     .then((response) => this.extrxtData(response))
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
    render() {
        return (
            <div class="clublist">
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} position={[pos1, pos2, pos3]} />
                <ApplicationButton title={"Cornell Cup Robotics"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science", "mechanics"]} position={[pos1, pos2, pos3]} />
                <ApplicationButton title={"Cornell Chinese Drama Society"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} position={[pos1, pos2, pos3]} />
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} position={[pos1, pos2, pos3]} />
                <ApplicationButton title={"Cornell Appdev"} logo={require('../image/App+Dev+Logo+-+Red.png')} intro={"Cornell Univeristy's open source app development project team"} tags={["engineering", "computer science"]} position={[pos1, pos2, pos3]} />

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
        };
        this.ToClubHomePage = this.ToClubHomePage.bind(this);
    }

    ToClubHomePage(event) {
        console.log("Sheldon")
        history.push('/ClubHome');
        window.location.reload();
    }

    renderClubTags() {

        var tags = []

        for (var i = 0; i < this.props.tags.length; i++) {
            tags.push(<div class='club_tag'>{this.props.tags[i]}</div>)
        }

        return (
            <div class='tag_wrapper'>
                {tags}
            </div>
        )
    }

    renderAppPostion() {

        var position = []

        for (var i = 0; i < this.props.position.length; i++) {
            position.push(
                <div class='app_position'>
                    <p>{this.props.position[i][0]}</p>
                    <p>{this.props.position[i][1]}</p>
                </div>
            )
        }

        return (
            <div class='position_wrapper'>
                {position}
            </div>
        )
    }


    render() {
        return (
            <div class='club_bt' onClick={this.ToClubHomePage}>
                <div><img src={this.props.logo} /></div>

                <div class='clubinfo'>
                    <div class='title'>{this.props.title}</div>
                    <div>{this.renderClubTags()}</div>
                    <div>{this.props.intro}</div>
                    <div>{this.renderAppPostion()}</div>
                </div>

                <div class="sub_bt">Apply</div>

            </div >
        );
    }
}

export default Applications;
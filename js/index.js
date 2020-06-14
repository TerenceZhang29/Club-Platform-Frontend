// import React from 'react';
// import ReactDOM from 'react-dom';

// const e = React.createElement;
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//         this.run = this.copy.bind(this);
//     }

//     run(event) {
//         console.log("Successfully run!");
//     }

//     render() {
//         return (
//             <div>
//                 <button id="run" onClick={this.run}> Run
//                 </button>
//             </div>
//         )
//     };
// }

// let button = document.getElementById('run');
// ReactDOM.render(e(Main), button);
document.getElementById('date').innerHTML = new Date().toDateString();



 

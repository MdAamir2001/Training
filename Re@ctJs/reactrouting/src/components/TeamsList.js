import { Component } from 'react';
import './TeamsList.css';

class TeamsList extends Component{
    componentDidMount(){
        console.log("TeamsList component mounted..........");
    }
    componentDidUpdate(){
        console.log("TeamsList component has updated......");
    }
    componentWillUnmount(){
        console.log("TeamsList component is unmounting....");
    }
    render(){
    
    
    return    (
        <div className='TeamsList'>
        <center >
            <b>Count of teams</b>{this.teamsCount}<br></br>
            <b>List of Teams in IPL 2023</b><br></br>
        <ul>
            <li>CSK</li>
            <li>RCB</li>
            <li>MI</li>
            <li>GT</li>
            <li>DC</li>
        </ul>
        </center>
        </div>
    )
}
}
export default TeamsList;
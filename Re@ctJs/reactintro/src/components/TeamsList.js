import { Component } from 'react';
import './TeamsList.css';

class TeamsList extends Component{
    teamsCount =11;
    getTeamsCount(){
        return this.teamsCount;
    }
    setTeamsCount(tcount){
        return this.teamsCount=tcount;
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
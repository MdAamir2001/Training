import { Component } from "react";

class TeamDetails extends Component{

    teamName="Deccan Charges";

    baselocation="Deccan";

    teamCaptain="YTA"

    componentDidMount(){
        console.log("TeamDetails component mounted..........");
    }
    componentDidUpdate(){
        console.log("TeamDetails component has updated......");
    }
    componentWillUnmount(){
        console.log("TeamDetails component is unmounting....");
    }

    render(){
        return(
        <div>
            <center>
                <form>
                    <label>Team Name</label><input type="text" value={this.teamName}/><br></br>
                    <label>Team Captain</label> <input type="text" value={this.teamCaptain}/><br></br>
                    <label>Base Location</label><br></br>
                    <select size="1" name="base_location" value={this.baselocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Banglore</option>
                        <option value="SRH">Hydrabad</option>
                        <option value="DC">Deccan</option>
                    </select>
                </form>
            </center>
        </div>
        )
    }
}

export default TeamDetails;
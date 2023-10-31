import { Component } from "react";

class TeamDetailsWithState extends Component{

    constructor(props)
    {
        super(props);
        this.state={teamName:"Deccan Charges",baselocation:"Deccan", teamCaptain:"YTA"};
    }

    teamName="Deccan Charges";

    baselocation="Deccan";

    teamCaptain="YTA";

    render(){
        return(
        <div>
            <center>
                <form>
                    <label>Team Name</label><input type="text" defaultValue={this.state.teamName}/><br></br>
                    <label>Team Captain</label> <input type="text" defaultValue={this.state.teamCaptain}/><br></br>
                    <label>Base Location</label><br></br>
                    <select size="1" name="base_location" defaultValue={this.state.baselocation}>
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

export default TeamDetailsWithState;
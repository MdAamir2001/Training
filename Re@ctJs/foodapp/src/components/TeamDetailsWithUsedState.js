import{useState} from "react";

function TeamDetailsWithUsedState() {

    const[teamName,setTeamName]=useState("Deccan Charges");
    const[teamCaptain,setCaptainName]=useState("David Warner");
    const[baselocation,setBaseLocation] =useState("Deccan");

    function Validate(){
        let vstatus=false;
        if(teamName === " ")
            window.alert("Name cannot be blank");
        else
            vstatus=true;

        if(teamCaptain === " ")
            window.alert("Captain  name cannot be blank");
        else
            vstatus=true;
        return vstatus;
    }


        return(
        <div>
            <center>
                <form action="javascript:window.alert('All)" onsubmit={Validate()}>
                    <label>Team Name</label><input type="text" onChange={e=>{setTeamName(e.target.value)}} defaultValue={teamName}/><br></br>
                    <label>Team Captain</label> <input type="text" on onChange={e=>{setCaptainName(e.target.value)}} defaultValue={teamCaptain}/><br></br>
                    <label>Base Location</label><br></br>
                    <select size="1" name="base_location" onChange={e=>{setBaseLocation(e.target.value)}}  defaultValue={baselocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Banglore</option>
                        <option value="SRH">Hyderabad</option>
                        <option value="DC">Deccan</option>
                    </select>
                    <input type="submit" value="save" /> 
               </form><br></br>
               <b>Team Name</b>{teamName}<br></br>
               <b>Team Captain</b>{teamCaptain}<br></br>
               <b>Base Location</b>{baselocation}<br></br>

            </center>
        </div>
        )
    }

export default TeamDetailsWithUsedState;
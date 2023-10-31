import './VenuesList.css';
let maxNoOfVenues =20;
function VenuesList(){
    let venueCount =10;
    return(
        <div>
        <center><b>Count of Venues</b>{venueCount}<br></br>
        Maximum number of venues allowed: {maxNoOfVenues}<br></br>
        <b>List Of Venues</b><br></br>
        <ol>
            <li>DY Patil Stadium, Mumbai</li>
            <li>MA chidambaram stadium, Chennai</li>
            <li>Wankhede Stadium, Mumbai</li>
            <li>Eden Gardens, Kolkata</li>
            <li>Dharmsala, Himachal pradesh</li>
            <li>Nehru Stadium, Chennai</li>
            <li>Chinnawamy stadium , banglore</li>
        </ol>
        <b>Count of Venues</b>
        </center>
        </div>
    )
}
export default VenuesList;
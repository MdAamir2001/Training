import { Component } from 'react';
class changePageColor extends Component{

    constructor(props){
        super(props);
        this.state={color:"blue"};
    }
    changeColor=(color) => {
        this.setState({color});
    }
    
    componentDidMount(){
        const dv = document.getElementById("mnt");
        dv.innerHTML +="<b><u>Component mounted</u></b><br>";
        dv.style.color=this.state.color;

    }
    componentDidUpdate(){
        const dv=document.getElementById("mnt");
        dv.innerHTML +="<br><b><i>Component updated</b></i><br>";
        dv.style.color=this.state.color;
    }
    componentWillUnmount(){
        // Write the code to save the state of the component into a database or a file
        const dv=document.getElementById("mnt");
        dv.innerHTML +="<br><b><i>Component unmounted</b></i><br>";
    }
    render(){
        return(
            <div>
        <select defaultValue={this.state.color}
        onChange={(e)=>{this.changeColor(e.target.value);
        }}
        > 
            <option value="red"> Red</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
            <option value="pink">Pink</option>
            <option value="teal">Teal</option>
        </select><br></br>
        <div id="mnt"></div>
        </div>);
    }
}
export default changePageColor;
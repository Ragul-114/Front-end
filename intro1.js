import App from "./App";
import intro from './images/intro.jpg';
import { Link } from "react-router-dom";


function Intro1(){
    return(
    <div style={{backgroundColor:"black"}}>
        <Link to="/home2">
            <div class="imgintro1">
            <img src={intro} style={{height:"107vh",width:"91vw",position:"relative",left:"60px"}}></img>
            </div>
       
        </Link>
      
    </div>
    );
}
export default Intro1;
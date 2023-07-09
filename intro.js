import App from "./App";
import React from "react";
import { Link } from "react-router-dom";
import intro2 from "./images/intro2.jpg";

function Intro(){
    return(
<div style={{backgroundColor:"black"}}>
<Link to="/intro1">
    <div class="imgintro">
    <img src={intro2} style={{height:"107vh",width:"91vw",position:"relative",left:"60px"}}></img>
    </div>

</Link>
</div>
    );
}
export default Intro;
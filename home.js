import React from "react";
import App from "./App";
import './index.css';
import Loginpage from "./loginpage";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import two from './images/two.gif';
import ngp2 from './images/ngp2.jpg'
import loading from './images/loading.gif';
import download from './images/download.gif';
import rlearn3 from './images/rlearn3.jpg';
import logo from './images/logo.jpg';
import {Link} from "react-router-dom";

function Home(){ 

  const [name, setName] = useState('');
  const[dept,setdepartment]=useState('');
  const[password,setpassword]=useState('');
  
  const handleSubmit = (event) => {
const alphabets = [
 'a','A','B','b','c','C','d','D','e','E','f','F', 'G', 'g','H','h','I','i','J','j','k','K','L','l','M','m','n','N', 'o','O','p','P','q','Q','r','R','s','S','T','t','u','V','v','W','x','w','X','.',
     'y',
     'y',
     'z',
     'Z',
 ]
 const numbers = ['1','2','3','4','5','6','7','8','9']
 if(name.length == 0 )
 {
  alert('Please enter your name!')
  return
 }

 if(password.length == 0 ){
  alert('Please enter your password!')
  return
 }
//  if(password.value!=alphabets && password.value!=numbers){
//   alert('Invalid password!');
//   return
//  }
//  if(password!=numbers){
//   alert('Invalid password!');
//   return
//  }


 if(dept.length == 0 ){
  alert('Please enter your department name')
  return
 }
//  if(dept.value!=alphabets ){
//   alert('Invalid department name');
//   return
//  }
// console.log('You clicked submit.');
<Link to="/login"></Link>
    alert('Thank you !! Your profile has been updated ...Go to RLEARN Portal')
 

}
return(
    <div style={{backgroundColor:"black"}}>
      
     <div class="imgh">
     <img style={{width:"210vh",height:"60vh",position:"relative",right:"400",top:"40px",left:"20px"}} src={ngp2}/>
     </div>
<div class="imgh">
<img src={logo} style={{width:"38vh",height:"35vh",left:"779px",top:"57px",position:"relative"}}/>
</div>
<br></br><br></br>
<br></br><br></br><br></br>

<div style={{backgroundColor:"#4a494a",display:"block",fontSize:"46px",color:"white",position:"relative",left:"0px"}}>&nbsp;Dept of Computer Science</div>
<br></br><br></br><br></br>
<text style={{color:"white",fontSize:"38px",position:"relative",left:"40px"}}>&nbsp;The Department of Computer Science was initiated in the year 1997 with the objective of providing quality &emsp;&nbsp;&nbsp;education and liable citizen to the nation. 
We the department equip the students with Industry standard &nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;proficiency Skills (Theory & Practical) by giving platforms like <text style={{fontFamily:"monospace",color:"cyan"}}>RLEARN</text><br></br> 
<br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;To boosten innovative skills in emerging trends and technologies <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;in the domain of Computer Science.</text>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br>


<text style={{color:"white",Align:"center",fontSize:"77px",position:"relative",left:"7px"}}>&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;
login to PORTAL</text>
<br></br><br></br><br></br><br></br><br></br>

<div  style={{position:"relative",left:"340px",backgroundColor:"white",width:"1200px",height:"250px"}}>
  <div class="imgh">
  <img style={{height:"25vh",width:"25vh",top:"7px",left:"496px",opacity:"0px",position:"relative"}}src={rlearn3}/>
  {/*  */}
  </div>
 <div class="listu" style={{backgroundSize:"",top:"86px",left:"160px",position:"relative"}}>
  <br></br>
  <br></br>
<div class="texth">
<text style={{color:"white",fontSize:"50px",position:"relative",left:"233px",top:"40px", backgroundColor:"rgba(06, 6, 20,.9)"}}>Welcome to RLEARN `</text>

</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

  <div style={{position:"relative",top:"30px",left:"228px"}}>
    <form id="login" onSubmit={handleSubmit} >
    <input type="text" value={name} placeholder="Username"  onChange={(e) => setName(e.target.value)} style={{fontSize:37,left:"10",padding:"1.4%",opacity:"8",backgroundColor:"black",color:"white"}}/>
    <br></br>
    <br></br>
    <br></br>
     <input type="text" id="password" placeholder="password" onChange={(e) => setpassword(e.target.value)}style={{fontSize:37,left:"10",padding:"1.4%",opacity:"8",backgroundColor:"black",color:"white"}}></input> 
     <br></br><br></br><br></br>
     <br></br>
     <input type="text" id="stream" placeholder="Department" onChange={(e) => setdepartment(e.target.value)}style={{fontSize:37,left:"10",padding:"1.4%",opacity:"8",backgroundColor:"black",color:"white"}}></input> 
     <br></br>
     <br></br>
     <br></br>
     <a id="submit"><button style={{height:"70px",width:"140px",fontFamily:"fantasy",backgroundColor:"black",color:"white",fontSize:"40px",padding:"9px"}}>Submit</button>
</a>
     </form>
     </div>
     <br></br><br></br><br></br>
     <Link to="/login">

      <text style={{color:"white",fontSize:"25px",position:"absolute",top:"880px",left:"890px"}}>Go to RLEARN... </text><br></br>
      <button style={{position:"absolute",top:"910px",left:"1050px"}} class="button-54" role="button">~~~</button>

  

     </Link>
 
     

 </div>
 <br></br>  <br></br> 
</div>
<div  style={{position:"absolute",left:"0px",top:"3100px",backgroundColor:"white",width:"1902px",height:"160px"}}>
<div class="imghh" >
  <Link to="/login">
  <img src={loading} style={{width:"18vw",height:"31vh"}}></img>

  </Link>
</div>
</div>
<br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div style={{backgroundColor:"#181b1c",display:"block",fontSize:"30px",color:"white",position:"relative",left:"0px",top:"500px"}}>&emsp;</div>
  <div class="imgh">
    <img src={two} style={{height:"90vh",width:"105vw",position:"relative",top:"505px"}}/>
  </div>


</div>
   );
   }

   export default Home;
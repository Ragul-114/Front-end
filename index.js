import React from 'react';
import ReactDOM from 'react-dom/client';
import Home2 from './home2';
import Home from './home';
import Loginpage from './loginpage';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Intro1 from './intro1';
import Intro from './intro';

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Intro/>}></Route>
                <Route path="/intro1" element={<Intro1/>}></Route>
                <Route path="/home2" element={<Home2/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/login" element={<Loginpage/>}></Route>

            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
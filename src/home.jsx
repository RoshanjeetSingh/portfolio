import React from "react";
import NavBar from "./navbar";
import './home.css'
import './assets/github.png'
function HomePage (){
    const author = ("Roshanjeet singh");
    
    return(
    <div className="" style={{height:'100vh'}}>
        <NavBar />
        <div className="home-containor">
            <h1 className="intro">
                hi i'am <br />
                <span className="author">
                    {author.toUpperCase()}
                </span>
            </h1>
        </div>
        <div className="home-containor2" >
        <h3>join me here</h3>
    <ul className="social-handles">
        <li><a href="#" target="main"><img id="github-png" src="src/assets/github.png" alt=""/></a></li>
        <li><a href="#" target="main"><img id="insta-png" src="src/assets/insta.png" alt=""/></a></li>
    </ul>
        </div>
    </div>);
}
export default HomePage
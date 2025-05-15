import React, { useState } from "react";
import './nav.css';
import './assets/menu.png'
import './assets/close.png'
function NavBar(){
    const [burgerclass, setburgerclass] = useState("burgerbar unclicked");
    const [ismenuclicked, setismenuclicked] =useState(false);
    const [isvisible, setisvisible]= useState(false)

    function updatemenu(){
        if(!ismenuclicked){
            setburgerclass("burgerbar clicked")
            setisvisible(!isvisible)
        }
        else{
            setburgerclass("burgerbar unclicked")
            setisvisible(!isvisible)
        }
        setismenuclicked(!ismenuclicked)
    }
    return(
        <div style={{width:'100%', height:'11vh'}}>
            <nav>
                <div className="burger-menu" onClick={updatemenu}>
                    <div className={burgerclass}></div>
                    <div className={burgerclass}></div>
                    <div className={burgerclass}></div>
                </div>
                {
                    isvisible &&(
                        <ul className={`navlist ${isvisible?'show':''}`} >
                            <a href="#"><li>portfolio </li></a> 
                            <a href="#"><li>projects</li></a>
                            <a href="#"><li>about</li></a>
                        </ul>
                    )
                }
            </nav>
        </div>
    );
}
export default NavBar
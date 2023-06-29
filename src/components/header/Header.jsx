import React from "react";
import './header.css';
import ME from '../../assets/me3.JPG';
import HeaderSocials from "./HeaderSocial";
import Cv from "./Cv";


const Header=()=>{
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Ankit kumar</h1>
                <h5 className="text-light">
                    Java Devloper
                </h5>
                <HeaderSocials/>
                <Cv/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
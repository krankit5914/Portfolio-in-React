import React from "react";
import './footer.css';

import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const Footer =()=>{
    return (
        <footer>
            <a href="#" className="footer_logo">Ankit kumar</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="http://facebook.com"><BsFacebook/></a>
                <a href="https://twitter.com"><BsTwitter/></a>
                <a href="http://instagram.com"><BsInstagram/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Ankit kumar. All rights reseved</small>
            </div>
        </footer>
    );
}
export default Footer;
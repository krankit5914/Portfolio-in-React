import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials =()=>{
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/ankit-kumar-1b1b5521a/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/krankit5914" target="_blank"><BsGithub/></a>
            <a href="https://leetcode.com/ankitr_raj_44/" target="_blank"><SiLeetcode/></a>
        </div>
    )
}
export default HeaderSocials; 
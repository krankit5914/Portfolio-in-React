import React from "react";
import CV from '../../../src/assets/cv.pdf'

const Cv =()=>{
    return(<div>
        <div className="cv">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary" >Let's Talk</a>
        </div>
    </div>);
}
export default Cv;
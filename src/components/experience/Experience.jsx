import React from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience =()=>{
    return( 
        <section id="experience">
            <h5>What Skills i have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Devlopment</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>JAVA</h4>
                            <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>Angular</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                <h3>Backend Devlopment</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>NodeJs</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>MySql</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>Postgrsql</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>Sql</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill ClassName="experience_details-icon"/>
                            <div>
                            <h4>Spring Boot</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;
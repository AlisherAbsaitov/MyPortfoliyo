import React from 'react';
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Yousaf from "../images/people_1.png";
import "./Home.css";

const Home = () => {
    return (
        <div className='w-100 home' id='home'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 homeTextPart text-white'>
                        <div>
                            <h3 className='welcome'>WELCOME!</h3>
                            <h1>
                                <Typewriter 
                                    options={{
                                        autoStart:true,
                                        loop:true,
                                        delay:60,
                                        strings:["I AM WEB DEVELOPER","I AM WEB DESIGNER"]
                                    }}
                                />
                            </h1>
                            <p>
                                I am a Front-End Web developer with 2 months of experience. My expertise is to create front-end designs for a website.
                            </p>
                            <div className='icons'>
                                <a  href='https://github.com/AlisherAbsaitov' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={"icon"}></FontAwesomeIcon></a>
                                <a href='https://xn--80affa3aj0al.xn--80asehdb/@Developer_24_03' rel="noreferrer"><FontAwesomeIcon icon={faTelegram} className={"icon"}></FontAwesomeIcon></a>
                                <a href='#' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className={"icon"}></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 homeImagepart'>
                        <img src={Yousaf} alt="Yousaf's Portrait"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

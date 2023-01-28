import React from 'react'
import "./about.css";
import AboutImg from "../../assets/myPhoto.jpeg";
import Info from './Info';
import CV from "../../assets/Subhajit_Paul_CV.pdf"



const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                    Fulltack developer, I create web pages with UI / UX user interface, I also do backend database and API creation that actually interact with data. I have more than 2 years of industry experience and many projects by myself.
                </p>
                <a download="" href={CV} className="button button--flex">Download CV
                <svg className='button__icon feather feather-file-text'
                width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
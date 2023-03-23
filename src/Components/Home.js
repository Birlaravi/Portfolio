import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit ,FaBootstrap,FaMobileAlt} from 'react-icons/fa';
import {SiExpress,SiMysql,SiMongodb,SiGithub} from 'react-icons/si'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import {TbBrandVscode} from 'react-icons/tb'

import Typewriter from "typewriter-effect";
import { animateScroll as scroll } from "react-scroll";
import Myimg from '../Images/black.jpg'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Project from './Project';
import Blog from '../Images/Blog.png'
import expanse from '../Images/expanse.png'
import covid from '../Images/covid19tracker.png'
import todomeet from '../Images/To-do-meet.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { SlEye} from "react-icons/sl";
const Home = () => {
  return (
    <>
    <div className="home">
      <div className="home-content">
        <h1 className="home__heading">Hi, I'm Ravindra Birla</h1>
        <h2 className="home__text">
          <Typewriter options={{autoStart:true,loop:true,delay:40,strings:["I'm a MERN Stack developer","I'm a Coder","I'm a Programmer",""],}}/>
        </h2>
      </div>
      <div className="image">
        <img src={Myimg} alt="" />
      </div>
    </div>
    
    <div className="gap">
    <div className='project-component'>
    <h1>Projects</h1>
    <Slide autoplay={false}>
       
        <div className="each-slide-effect image-container">
            <img src={Blog} alt="" />
           <div className="icon-eye">
            <a href="https://expansemangement.cyclic.app/" target="blank" ><SlEye/></a>
            <div className="code"><a href="https://github.com/Birlaravi/react-blog" target="blank" >Code</a></div>
           </div>
        </div>
        <div className="each-slide-effect image-container">
            <img src={todomeet} alt="" />
           <div className="icon-eye">
            <a href="https://todomeet.netlify.app/" target="blank" ><SlEye/></a>
            <div className="code"><a href="https://github.com/Birlaravi/ToDo-Meet" target="blank" >Code</a></div>
           </div>
        </div>
        <div className="each-slide-effect image-container">
            <img src={expanse} alt="" />
           <div className="icon-eye">
            <a href="https://expansemangement.cyclic.app/" target="blank" ><SlEye/></a>
            <div className="code"><a href="https://github.com/Birlaravi/expanse-management" target="blank" >Code</a></div>
           </div>
        </div>
        <div className="each-slide-effect image-container">
            <img src={covid} alt="" />
           <div className="icon-eye">
            <a href="https://covid19trackerbyravindra.netlify.app/" target="blank" ><SlEye/></a>
            <div className="code"><a href="https://github.com/Birlaravi/covid-19-tracker" target="blank" >Code</a></div>
           </div>
        </div>
    </Slide>
    </div>
    </div>
    <div className="gap"><div className="skills">
      <h1>Skills</h1>
      <div className="skills-icons">
        <div>
          <FaHtml5 className='icon'/>
          <p>HTML5</p>
        </div>
        <div >
          <FaCss3 className="icon"/>
          <p>CSS3</p>
        </div>
        <div >
          <FaJs className="icon"/>
          <p>JavaScript</p>
        </div>
        <div >
          <FaReact className="icon" />
          <p>React</p>
        </div>
        <div >
          <FaNodeJs className="icon"/>
          <p>Node.js</p>
        </div>
       
        <div>
          <FaBootstrap className='icon'/>
          <p>Bootstrap</p>
        </div>
        <div >
          <SiExpress className="icon" />
          <p>Express</p>
        </div>
        <div >
          <SiMongodb className="icon"/>
          <p>Mongodb</p>
        </div>
        <div>
          <SiMysql className="icon"/>
          <p>Mysql</p>
        </div>
        <div>
          <FaGit className="icon"/>
          <p>Git</p>
        </div>
        <div >
          <SiGithub className="icon"/>
          <p>Github</p>
        </div>
        <div>
          <TbBrandVscode className="icon"/>
          <p>Vscode</p>
        </div>
      </div>
    </div></div>
    <div className="gap"><div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-icons">
      <FaEnvelope />
        <a href="mailto:ravindrabirla20@gmail.com">
           ravindrabirla20@gmail.com
        </a>
</div>
      <div className="contact-icons">
      <FaMobileAlt />
        <a href="tel:9575921390">
           +919575921390
        </a>
</div>
</div></div>
    </>
  );
};

export default Home;

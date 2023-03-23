import React from 'react';
import Project from './Project';
import Blog from '../Images/Blog.png'
import expanse from '../Images/expanse.png'
import covid from '../Images/covid19tracker.png'
import todomeet from '../Images/To-do-meet.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { SlEye} from "react-icons/sl";
const Projects = () => {

  return (
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
  );
};

export default Projects;

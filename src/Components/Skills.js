import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit ,FaBootstrap} from 'react-icons/fa';
import {SiExpress,SiMysql,SiMongodb,SiGithub} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'
const Skills = () => {
  return (
    <div className="skills">
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
    </div>
  );
};

export default Skills;

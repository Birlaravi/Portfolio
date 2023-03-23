import React from 'react';

const Project = ({ img}) => {
  return (
    <div className="project">
      <img src={img} alt="" style={{width:'600px'}} />
    </div>
  );
};

export default Project;

import React from 'react';

import Image from './image';

import './project.scss';

const Project = ({title, image, github, files, children}) => (
  <div className="project">
    <p className="project-title">{title}</p>
    <Image className="project-image" src={image} alt="" />
    <a className="button project-button" href={files}>Download</a>
    <a className="button project-button" href={github}>GitHub repo</a>
    {children}
  </div>
);

export default Project;

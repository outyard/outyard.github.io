import React from 'react';

import './project.scss';

const Project = ({title, image, github, files, children}) => {
  // TODO: Import image using GraphQL.
  return (
    <div className="project">
      <p className="project-title">{title}</p>
      <img className="project-image" src={image} alt="" />
      <a className="button project-button" href={files}>Download</a>
      <a className="button project-button" href={github}>GitHub repo</a>
      {children}
    </div>
  );
};

export default Project;

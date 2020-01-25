import React from 'react';

import './project.scss';

const Project = ({title, author, image, github, files, children}) => {
  // TODO: Import image using GraphQL.
  return (
    <div className="project">
      <h1 className="project-title">{title} by {author}</h1>
      {image &&
        <img className="project-image" src={image} alt="" />
      }
      {(files || github) &&
        <div class="project-buttons">
          {files &&
            <a className="button project-button" href={files} target="_blank">Download &#x1f853;</a>
          }
          {github &&
            <a className="button project-button" href={github} target="_blank">GitHub repository &#x1f855;</a>
          }
        </div>
      }
      {children}
    </div>
  );
};

export default Project;

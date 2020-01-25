import React from 'react';

import './project.scss';

const Project = ({title, author, image, video, site, github, files, children}) => {
  // TODO: Import image using GraphQL.
  return (
    <div className="project">
      <h1 className="project-title">{title} by {author}</h1>
      {image &&
        <img className="project-image" src={image} alt="" />
      }
      {video &&
        <video className="project-video" autoPlay={true} loop={true} muted={true}>
          <source src={video} type="video/mp4" />
        </video>
      }
      {(files || github || site) &&
        <div className="project-buttons">
          {site &&
            <a className="button project-button" href={site} target="_blank">Try the app in your browser &#x2197;</a>
          }
          {files &&
            <a className="button project-button" href={files} target="_blank">Download &#x2193;</a>
          }
          {github &&
            <a className="button project-button" href={github} target="_blank">GitHub repository &#x2197;</a>
          }
        </div>
      }
      {children}
    </div>
  );
};

export default Project;

import React from 'react';

import './project.scss';
import Container from './container';

export default ({title, author, image, video, site, github, files, children}) => (
  <div className="project">
    <Container>
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
            <a className="button project-button" href={site} target="_blank">Try in your browser</a>
          }
          {files &&
            <a className="button project-button" href={files} target="_blank">Download</a>
          }
          {github &&
            <a className="button project-button" href={github} target="_blank">GitHub repository</a>
          }
        </div>
      }
      {children}
    </Container>
  </div>
);

import React from 'react';

import './project.scss';
import Container from './container';

export default ({title, author, image, video, site, download, source, description, tools, type, children}) => (
  <div className="project">
    <Container>
      <h1 className="project-title">
	{title} <span className="project-author">by {author}</span>
      </h1>

      {image &&
        <img className="project-media" src={image} alt="" />
      }
      {video &&
	<div dangerouslySetInnerHTML={{__html: `
	  <video class="project-media" autoplay loop muted playsinline>
	    <source src="${video}" type="video/mp4" />
	  </video>
	`}}></div>
      }

      <div className="project-buttons">
	{site &&
	  <p><a className="button project-button" href={site} target="_blank">
       {type == 'game' ? 'Play in browser' : 'Open in browser'}
    </a></p>
  }
	{download &&
	  <p><a className="button project-button" href={download} target="_blank">Download</a></p>
	}
	{source &&
	  <p><a className="button project-button" href={source} target="_blank">Source code</a></p>
	}
      </div>

      <p className="project-description">{description}</p>
      <p className="project-made-with">{tools}</p>
    </Container>
  </div>
);

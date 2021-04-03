import React from 'react';

import './project.scss';
import Container from './container.js';
import Media from './media.js';

export default ({
  title,
  author,
  media,
  site,
  download,
  source,
  description,
  tools,
  type,
}) => {
  return (
    <div className="project">
      <Container>
        <h1 className="project-title">
          <span dangerouslySetInnerHTML={{__html: `
            ${title}
          `}}></span>
          <span className="project-author">by {author}</span>
        </h1>

        {media &&
          <div className="project-media">
            <Media url={media} />
          </div>
        }

        <div className="project-buttons">
          {site &&
            <p>
              <a className="button project-button" href={site} target="_blank" rel="noreferrer">
                {type === 'game' ? 'Play in browser' : 'Open in browser'}
              </a>
            </p>
          }
          {download &&
            <p><a className="button project-button" href={download} target="_blank" rel="noreferrer">Download</a></p>
          }
          {source &&
            <p><a className="button project-button" href={source} target="_blank" rel="noreferrer">Source code</a></p>
          }
        </div>

        <p className="project-description" dangerouslySetInnerHTML={{__html: `
          ${description}
        `}}></p>
        <p className="project-tools">{tools}</p>
      </Container>
    </div>
  );
};

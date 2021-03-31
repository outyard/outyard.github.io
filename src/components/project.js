import React from 'react';
import LazyLoad from 'react-lazyload';

import './project.scss';
import Container from './container.js';
import Media from './media.js';

export default function Project({
  title,
  author,
  media,
  site,
  download,
  source,
  description,
  tools,
  type,
}) {
  const buttonIcon = (
    <>
      <span className="project-button-icon">&gt;</span>&ensp;
    </>
  );

  return (
    <div className="project">
      <Container>
        {media &&
          <div className="project-media">
            <LazyLoad once={true} offset={1000}>
              <Media url={media} />
            </LazyLoad>
          </div>
        }

        <h1 className="project-title">
          <span dangerouslySetInnerHTML={{__html: `
            ${title}
          `}}></span>
          {author &&
            <span className="project-author">by {author}</span>
          }
        </h1>

        <div className="project-buttons">
          {site &&
            <p>
              <a className="button project-button" href={site} target="_blank" rel="noreferrer">
                {buttonIcon}{type === 'game' ? 'Play in browser' : 'Open in browser'}
              </a>
            </p>
          }
          {download &&
            <p>
              <a className="button project-button" href={download} target="_blank" rel="noreferrer">
                {buttonIcon}Download
              </a>
            </p>
          }
          {source &&
            <p>
              <a className="button project-button" href={source} target="_blank" rel="noreferrer">
                {buttonIcon}Source code
              </a>
            </p>
          }
        </div>

        <p className="project-description" dangerouslySetInnerHTML={{__html: `
          ${description}
        `}}></p>
        <p className="project-tools">{tools}</p>
      </Container>
    </div>
  );
}

import React from 'react';

import Container from './container';

import './hackathon.scss';

const Hackathon = ({id, date, title, text, start, end, total, location, locationUrl, isTeaser, children}) => (
  <div className={'hackathon ' + (isTeaser ? 'hackathon-teaser' : '')}>
    <Container>
      <div className="hackathon-meta">
        {date && <>
          <span className="hackathon-date">{date} <span className="nowrap">{start}&ndash;{end} ({total} h)</span></span>{location && <>
            , <span className="hackathon-location"><a href={locationUrl} target="_blank">{location}</a></span>
          </>}
        </>}
      </div>
      <h1 className="hackathon-title">{title}</h1>

      {text &&
        <p className="hackathon-text">{text}</p>
      }

      {isTeaser && <div className="hackathon-buttons">
        <p className="hackathon-text"><a className="hackathon-button" href="https://discord.gg/WeTRnTc" target="_blank">Join the Discord server</a></p>
        <p className="hackathon-text"><a className="hackathon-button" href="https://www.facebook.com/outyardhackathon" target="_blank">Stay updated on Facebook</a></p>
      </div>}

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </Container>
  </div>
);

export default Hackathon;

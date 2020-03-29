import React from 'react';

import Container from './container';

import './hackathon.scss';

const Hackathon = ({id, date, title, text, start, end, total, location, locationUrl, isTeaser, children}) => (
  <div className={'hackathon ' + (isTeaser ? 'hackathon-teaser' : '')}>
    <Container>
      <div className="hackathon-meta">
        {id}&ensp;{date && <>
          <span className="hackathon-date">{date}&ensp;<span className="nowrap">{start}-{end} ({total} h)</span></span>
        </>}
      </div>

      <h1 className="hackathon-title">{title}</h1>

      {text &&
        <p className="hackathon-text">{text}</p>
      }

      {isTeaser && <div className="hackathon-buttons">
        <p className="hackathon-text"><a className="hackathon-button" href="https://discord.gg/WeTRnTc" target="_blank">Join Discord server</a></p>
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

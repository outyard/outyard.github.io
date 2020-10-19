import React from 'react';

import Container from './container';
import Timer from './timer';

import './hackathon.scss';

export default ({id, date, title, text, start, end, total, location, locationUrl, isTeaser, children}) => (
  <div className={'hackathon ' + (isTeaser ? 'hackathon-teaser' : '')}>
    <Container>
      <div className="hackathon-meta">
        <span className="hackathon-meta-item">{id}</span>{date && <>
          <span className="hackathon-meta-item"><span className="nowrap">{date}</span></span><span className="hackathon-meta-item"><span className="nowrap">{total} hours</span></span>
        </>}
      </div>

      <h1 className="hackathon-title">{title}</h1>
    </Container>

    {isTeaser &&
      <div className="hackathon-timer">
        <Container wide="true">
          <Timer date={date} start={start} end={end}></Timer>
        </Container>
      </div>
    }

    <Container>
      {text &&
        <p className="hackathon-text">{text}</p>
      }

      {isTeaser && <div className="hackathon-buttons">
        <a className="hackathon-button" href="https://discord.gg/WeTRnTc" target="_blank">Join Discord server</a>
      </div>}

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </Container>
  </div>
);

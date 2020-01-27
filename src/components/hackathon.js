import React from 'react';

import Container from './container';

import './hackathon.scss';

const Hackathon = ({id, date, title, start, end, total, location, locationUrl, isTeaser, children}) => (
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

      {isTeaser && <>
        <p className="hackathon-text">What can you make in {total} hours? Bring a laptop and some snacks and join us at <a href={locationUrl} target="_blank">{location}</a>. Build something awesome and get inspired by the creations of others.</p>
      </>}

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </Container>
  </div>
);

export default Hackathon;

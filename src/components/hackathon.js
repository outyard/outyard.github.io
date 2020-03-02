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

      {isTeaser &&
        <p className="hackathon-text"><a href="https://www.facebook.com/outyardhackathon" target="_blank">Follow us on Facebook</a> to get updates and future dates.</p>
      }

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </Container>
  </div>
);

export default Hackathon;

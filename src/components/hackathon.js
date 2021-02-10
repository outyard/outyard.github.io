import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon.scss';
import Container from './container';

momentDurationFormatSetup(moment);

const Hackathon = ({id, date, title, start, end, children}) => {
  const total = moment(end).diff(start, 'h');

  return (
    <div className="hackathon">
      <div className="hackathon-header">
        <Container wider="true">
          <div className="hackathon-meta">
            <span className="hackathon-meta-id hackathon-meta-item">{id}</span>{date && <>
              <span className="hackathon-meta-item"><span className="nowrap">{date}</span></span><span className="hackathon-meta-item"><span className="nowrap">{total} h</span></span>
            </>}
          </div>
          <h1 className="hackathon-title">{title}</h1>
        </Container>
      </div>

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </div>
  );
};

export default Hackathon;

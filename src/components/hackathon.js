import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon.scss';
import Container from './container';

momentDurationFormatSetup(moment);

const Hackathon = ({id, title, start, end, children}) => {
  const date = moment(start).format("D MMM YYYY");
  const total = moment(end).diff(start, 'h');

  return (
    <div className="hackathon" id={id}>
      <div className="hackathon-header">
        <Container>
          <div className="hackathon-meta">
            <a className="hackathon-meta-id hackathon-meta-item" href={'#' + id}>{id}</a>{date && <>
              <span className="hackathon-meta-item"><span className="nowrap">{date}</span></span><span className="hackathon-meta-item"><span className="nowrap">{total} hours</span></span>
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

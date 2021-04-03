import React from 'react';
import LazyLoad from 'react-lazyload';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon.scss';
import Container from './container.js';
import HackathonTimer from './hackathon-timer.js';
import Project from './project.js';

momentDurationFormatSetup(moment);

export default ({id, title, start, end, isTeaser, projects}) => {
  const date = moment(start).format("D MMM YYYY");
  const total = moment(end).diff(start, 'h');

  return (
    <div className="hackathon" id={id}>
      <div className="hackathon-header">
        <Container>
          <div className="hackathon-meta">
            <a className="hackathon-meta-item" href={'#' + id}>
              <span className="hackathon-meta-id-hash">#</span>{id}
            </a>
            <span className="hackathon-meta-item">
              <span className="nowrap">{date}</span>
            </span>
            <span className="hackathon-meta-item">
              <span className="nowrap">{total} hours</span>
            </span>
          </div>
          <h1 className="hackathon-title">{title}</h1>
        </Container>
      </div>

      {isTeaser &&
        <div className="hackathon-timer-container">
          <HackathonTimer start={start} end={end}></HackathonTimer>
        </div>
      }

      {projects &&
        <div className="hackathon-projects">
          {projects.map((project) =>
            <div key={project.id} className="hackathon-project">
              <LazyLoad once={true} offset={1000}>
                <Project
                    title={project.title}
                    author={project.author}
                    media={project.media}
                    site={project.site}
                    download={project.download}
                    source={project.source}
                    description={project.description}
                    tools={project.tools}
                    type={project.type}
                    />
              </LazyLoad>
            </div>
          )}
        </div>
      }
    </div>
  );
};

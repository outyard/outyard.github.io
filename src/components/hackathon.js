import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon.scss';
import Container from './container';
import HackathonTimer from './hackathon-timer';
import Project from './project';

momentDurationFormatSetup(moment);

const Hackathon = ({id, title, start, end, isTeaser, projects}) => {
  const date = moment(start).format("D MMM YYYY");
  const total = moment(end).diff(start, 'h');

  return (
    <div className="hackathon" id={id}>
      <div className="hackathon-header">
        <Container>
          <div className="hackathon-meta">
            <a className="hackathon-meta-id hackathon-meta-item" href={'#' + id}><span className="hackathon-meta-id-hash">#</span>{id}</a>{date && <>
              <span className="hackathon-meta-item"><span className="nowrap">{date}</span></span><span className="hackathon-meta-item"><span className="nowrap">{total} hours</span></span>
            </>}
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
              <Project
                  title={project.title}
                  author={project.author}
                  image={project.image}
                  video={project.video}
                  site={project.site}
                  download={project.download}
                  source={project.source}
                  description={project.description}
                  tools={project.tools}
                  type={project.type}
                  />
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Hackathon;

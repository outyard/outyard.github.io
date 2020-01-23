import React from 'react';

import Container from './container';

import './hackathon.scss';

const Hackathon = ({id, title, children}) => (
  <div className="hackathon">
    <Container>
      <p className="hackathon-id">{id}</p>
      <h1 className="hackathon-title">{title}</h1>

      <div className="Hackathon-projects">
        {children}
      </div>
    </Container>
  </div>
);

export default Hackathon;

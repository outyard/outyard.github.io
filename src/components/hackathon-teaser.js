import React from 'react';

import './hackathon-teaser.scss';
import Hackathon from './hackathon';
import Container from './container';
import HackathonTimer from './hackathon-timer';

export default (props) => (
  <Hackathon {...props}>
    <HackathonTimer start={props.start} end={props.end}></HackathonTimer>
  </Hackathon>
);

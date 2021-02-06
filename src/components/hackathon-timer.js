import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon-timer.scss';
import Container from './container';

momentDurationFormatSetup(moment);

const HackathonTimer = ({start, end}) => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    const now = moment();
    const isStarted = now.isSameOrAfter(start);
    const difference = isStarted
        ? moment(end).diff(now, 's')
        : moment(start).diff(now, 's');
    setTime(difference);
  }, 500);

  const now = moment();
  const duration = moment.duration(time, 's');
  const hours = duration.hours();
  const startingSoon = now.isBefore(start) && hours <= 24;
  const isStarted = now.isSameOrAfter(start) && now.isBefore(end);
  const nearlyFinished = hours < 1;
  const finished = now.isSameOrAfter(end);

  const timeText = duration.format('hh:mm:ss', {trim: false});

  return (
    <Container>
      <div
        className={`
          hackathon-timer
          ${finished ? 'hackathon-timer-finished' : ''}
          ${nearlyFinished ? 'hackathon-timer-nearly-finished' : ''}
        `}
      >
        <p className="hackathon-timer-starting-soon">
          {startingSoon ? 'Starting soon' : ''}
          {isStarted && !nearlyFinished ? 'Happy hacking' : ''}
          {isStarted && nearlyFinished ? 'Time flies' : ''}
          {finished ? 'Time’s up! ggwp' : ''}
        </p>
        <h1 className="hackathon-timer-time">{timeText}</h1>
      </div>
    </Container>
  );
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      tick();
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default HackathonTimer;

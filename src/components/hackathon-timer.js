import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon-timer.scss';
import Container from './container.js';

momentDurationFormatSetup(moment);

export default ({start, end}) => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    const now = moment();
    const started = now.isSameOrAfter(start);
    const difference = started
        ? moment(end).diff(now, 's')
        : moment(start).diff(now, 's');
    const time = Math.max(difference, 0);
    setTime(time);
  }, 500);

  const now = moment();
  const duration = moment.duration(time, 's');
  const hours = duration.asHours();
  const startingSoon = now.isSameOrBefore(start);
  const started = now.isAfter(start);
  const finished = started && hours <= 0;
  const nearlyFinished = hours < 1 && hours >= 0 && !finished;
  const nearlyStarted = hours < 1 && hours >= 0 && !started;

  const timeText = duration.format('hh:mm:ss', {trim: false});
  const [timeHours, timeMinutes, timeSeconds] = timeText.split(':');

  return (
    <Container>
      <div
          className={`
            hackathon-timer
            ${started ? 'hackathon-timer-started' : ''}
            ${nearlyFinished || nearlyStarted ? 'hackathon-timer-nearly-finished' : ''}
            ${finished ? 'hackathon-timer-finished' : ''}
          `}
          >
        <p className="hackathon-timer-status">
          {startingSoon ? 'Starting in' : ''}
          {started && !nearlyFinished && !finished ? 'Happy hacking' : ''}
          {started && nearlyFinished ? 'Time flies' : ''}
          {finished ? 'Time’s up! ggwp' : ''}
        </p>
        <h1 className="hackathon-timer-time">
          {timeHours}<span className="hackathon-timer-time-colon">:</span>{/*
          */}{timeMinutes}<span className="hackathon-timer-time-colon">:</span>{/*
          */}{timeSeconds}
        </h1>
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

import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './hackathon-timer.scss';
import Container from './container.js';

momentDurationFormatSetup(moment);

export default ({start, end}) => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    setTime(moment().valueOf());
  }, 500);

  const now = moment(time);
  const started = now.isAfter(start);

  const difference = started
      ? moment(end).diff(now, 's')
      : moment(start).diff(now, 's');
  const timeLeft = Math.max(difference, 0);

  const nowDay = now.startOf('day');
  const startDay = moment(start).startOf('day');
  const endDay = moment(end).startOf('day');
  const differenceDays = started
      ? endDay.diff(nowDay, 's')
      : startDay.diff(nowDay, 's');
  const timeLeftDays = Math.max(differenceDays, 0);

  const duration = moment.duration(timeLeft, 's');
  const durationDays = moment.duration(timeLeftDays, 's');
  const hours = duration.asHours();
  const startingSoon = now.isSameOrBefore(start);
  const finished = started && hours <= 0;
  const nearlyFinished = hours < 1 && hours >= 0 && !finished;
  const nearlyStarted = hours < 1 && hours >= 0 && !started;
  const longTimeLeft = hours >= 48;

  let timeComponent;
  if (longTimeLeft) {
    const days = durationDays.asDays();
    timeComponent = <>
      {days} days
    </>;
  } else {
    const timeText = duration.format('hh:mm:ss', {trim: false});
    const [timeHours, timeMinutes, timeSeconds] = timeText.split(':');
    timeComponent = <>
      {timeHours}<span className="hackathon-timer-time-colon">:</span>{/*
      */}{timeMinutes}<span className="hackathon-timer-time-colon">:</span>{/*
      */}{timeSeconds}
    </>;
  }

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
          {startingSoon && !started ? 'Starting in' : ''}
          {started && !nearlyFinished && !finished ? 'Happy hacking' : ''}
          {started && nearlyFinished ? 'Time flies' : ''}
          {finished ? 'Time’s up! ggwp' : ''}
        </p>
        <h1 className="hackathon-timer-time">
          {timeComponent}
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

import React, {Component} from 'react';
import moment from 'moment';

import './timer.scss';

function getTimeLeft() {
  let end = moment('2020-04-26 00:00:00 GMT+2');
  let now = moment();
  let remaining = moment.duration(end.diff(now));

  return {
    hours: remaining.hours(),
    minutes: remaining.minutes(),
    seconds: remaining.seconds(),
  };
}

class Timer extends Component {
  state = getTimeLeft();

  componentDidMount() {
    this.interval = setInterval(() => {
      let {hours, seconds, minutes} = this.state;

      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(this.interval);
        return;
      }

      if (seconds > 0) {
        --seconds;

        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(this.interval);
        }
      } else {
        seconds = 59;

        if (minutes > 0) {
          --minutes;
        } else {
          minutes = 59;

          if (hours > 0) {
            --hours;
          }
        }
      }

      this.setState(() => ({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {hours, minutes, seconds} = this.state;
    let hidden = hours >= 7;
    let finished = hours === 0 && minutes === 0 && seconds === 0;
    let near = hours === 0 && minutes < 15;

    return (
      <div className={`timer ${hidden ? 'timer-hidden' : ''} ${finished ? 'timer-finished' : ''} ${near ? 'timer-near' : ''}`}>
        <h1 className="timer-time">
          {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    )
  }
};

export default Timer;

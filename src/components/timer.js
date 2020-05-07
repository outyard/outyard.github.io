import React, {Component} from 'react';
import moment from 'moment';

import './timer.scss';

function getTimeLeft(date, endTime) {
  let end = moment(`${date} ${endTime} GMT+2`);
  end.add(1, 'days');
  let now = moment();
  console.log(end, now);
  let remaining = moment.duration(end.diff(now));

  let state = {
    days: remaining.days(),
    hours: remaining.hours(),
    minutes: remaining.minutes(),
    seconds: remaining.seconds(),
  };
  state.hours = Math.max(state.hours, 0);
  state.minutes = Math.max(state.minutes, 0);
  state.seconds = Math.max(state.seconds, 0);
  return state;
}

class Timer extends Component {
  state = getTimeLeft(this.props.date, this.props.end);

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
    clearInterval(this.interval);
  }

  render() {
    const {days, hours, minutes, seconds} = this.state;
    let hidden = days > 1 || (hours >= 7 && minutes >= 15);
    let finished = hours <= 0 && minutes === 0 && seconds === 0;

    let near = hours < 1;
    let nearer = hours < 1 && minutes < 15;

    return (
      <div className={`timer ${hidden ? 'timer-hidden' : ''}
                      ${finished ? 'timer-finished' : ''}
                      ${near ? 'timer-near' : ''}
                      ${nearer ? 'timer-nearer' : ''}`}>
        <h1 className="timer-time">
          {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    )
  }
};

export default Timer;

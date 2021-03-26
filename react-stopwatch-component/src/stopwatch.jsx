import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      isPlaying: false
    };
    this.tick = this.tick.bind(this);
    this.pauseTick = this.pauseTick.bind(this);
    this.resetTick = this.resetTick.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  tick() {
    this.intervalId = setInterval(() => {
      this.setState({
        startTime: this.state.startTime + 1,
        isPlaying: true
      });
    }, 1000);
  }

  pauseTick() {
    clearInterval(this.intervalId);
  }

  resetTick() {
    this.setState({
      startTime: 0,
      isPlaying: false
    });
  }

  changeIcon() {
    if (!this.state.isPlaying) {
      this.setState({
        startTime: this.state.startTime,
        isPlaying: true
      });
    } else {
      this.setState({
        startTime: this.state.startTime,
        isPlaying: false,
        isPaused: true
      });
    }
  }

  render() {
    if (!this.state.isPlaying) {
      return (
        <div>
          <div className='stopwatch-face'>
            <h1 onClick={this.resetTick}>{this.state.startTime}</h1>
          </div>
          <div className='controlButton'>
            <i className="fas fa-play" onClick={() => {
              this.tick();
              this.changeIcon();
            }}></i>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='stopwatch-face'>
            <h1>{this.state.startTime}</h1>
          </div>
          <div className='controlButton'>
            <i className="fas fa-pause" onClick={() => {
              this.pauseTick();
              this.changeIcon();
            }}></i>
          </div>
        </div>
      );
    }
  }

}

export default StopWatch;

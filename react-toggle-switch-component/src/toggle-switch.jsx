import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSwitchOn: false };
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);
  }

  handleToggleSwitch() {
    this.setState({ isSwitchOn: true });
  }

  render() {

    if (!this.state.isSwitchOn) {
      return (
        <div className='containerOn' onClick={this.handleToggleSwitch}>
        <div className='switchOn'></div>
          <div onClick={this.handleToggleSwitch}>On</div>
        </div>
      );

    } else {
      return (
        <div className='containerOff' onClick={this.handleToggleSwitch}>
          <div className='switchOff'></div>
          <div onClick={this.handleToggleSwitch}>Off</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;

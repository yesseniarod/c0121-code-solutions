import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    if (this.state.value <= 3) {
      return <button className='original' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.value <= 6) {
      return <button className="secondLevel" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.value <= 9) {
      return <button className='thirdLevel' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.value <= 12) {
      return <button className='fourthLevel' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.value <= 15) {
      return <button className='fifthLevel' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.value <= 18) {
      return <button className='lastLevel' onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className='lastLevel' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

export default HotButton;

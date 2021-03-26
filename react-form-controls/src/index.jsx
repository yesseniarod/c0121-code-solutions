import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSumbit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <label>Email</label>
        <input
        type='email'
        onChange={this.handleChange}>
        </input>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);

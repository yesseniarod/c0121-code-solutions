import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null
    };

    this.showContent = this.showContent.bind(this);
  }

  showContent(event) {
    const selected = event.target.getAttribute('subject');
    if (selected === this.state.isOpen) {
      this.setState({
        isOpen: null
      });
    } else {
      this.setState({
        isOpen: selected
      });
    }
  }

  render() {
    const subjects = this.props.themes.map(subject => {
      const hide = subject.title === this.state.isOpen ? '' : 'hidden';
      return (
            <div key={subject.id} className='subject'>
            <div className='title' subject={subject.title} onClick={this.showContent}> {subject.title} </div>
            <div className={hide}>{subject.description}</div>
            </div>
      );
    });
    return subjects;
  }
}

export default Accordion;

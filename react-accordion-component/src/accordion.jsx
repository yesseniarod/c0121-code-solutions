import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.showContent = this.showContent.bind(this);
  }

  showContent() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    if (!this.state.isOpen) {
      return (
         <div className='container'>
           <div className='html' onClick={this.showContent}></div>
           <div className='css'></div>
           <div className='javascript'></div>
         </div>
      );
    }
    return (
       <div className='container'>
         <div className='html'></div>
         <div className='css'></div>
         <div className='javascript'></div>
       </div>
    );
  }
}

export default Accordion;

// in progress
// right now this component is not being rendered
// need to make adjustments and import function from index

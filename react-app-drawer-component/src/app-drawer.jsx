import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className='container'>
        <i className="fas fa-bars"></i>
      </div>
    );
  }
}

export default AppDrawer;

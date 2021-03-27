import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      isOpen: true
    });
  }

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <div className="container">
          <div className='navigation-menu'>
            <i className="fas fa-bars"
              onClick={this.openMenu}></i>
          <div className='inactive-menu'>
            <h2>Menu</h2>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Get Started</a></li>
                <li><a href='#'>Sign In</a></li>
            </ul>
          </div>
          </div>
        </div>

      );
    } else {
      return (
        <div className="container shadow"
        onClick={this.closeMenu}>
        <div className="navigation-menu">
          <div className='active-menu'>
            <h2>Menu</h2>
            <ul>
              <li onClick={this.closeMenu}><a href='#'>About</a></li>
              <li onClick={this.closeMenu}><a href='#'>Get Started</a></li>
              <li onClick={this.closeMenu}><a href='#'>Sign In</a></li>
            </ul>
          </div>
        </div>
        </div>
      );
    }
  }

}

export default AppDrawer;

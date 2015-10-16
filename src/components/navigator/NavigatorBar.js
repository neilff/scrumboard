import React, { Component } from 'react';

export default class NavigatorBar extends Component {
  render() {
    const children = this.props;

    return (
      <nav className="flex flex-center flex-justify fixed z2 top-0 left-0 right-0 p2 clearfix white bg-blue">
        { children }
      </nav>
    );
  }
}

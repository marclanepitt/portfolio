import React, { Component } from 'react';
import '../static/css/button.css';

export default class Button extends Component {
  render() {
    return (
      <div className={this.props.className + " btn-port" + " btn-port--"+this.props.size} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

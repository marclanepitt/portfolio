import React, { Component } from 'react';

export default class CircleArrowBack extends Component {
  render() {
    return (
      <i onClick = {this.props.backToNav} className="fa fa-arrow-circle-o-left circle-back" aria-hidden="true"></i>
    )
  }
}

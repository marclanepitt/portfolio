import React, { Component } from 'react';

export default class BusinessCard extends Component {
  render() {
    return (
      <div className="business-card-wrapper">
        <div className="business-card-image-circle" style={{backgroundImage: `url(${this.props.propic})`}}/>
      </div>
    )
  }
}

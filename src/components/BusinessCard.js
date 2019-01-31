import React, { Component } from 'react';

export default class BusinessCard extends Component {
  render() {
    return (
      <div className="business-card-wrapper">
        <div className="business-card-image-circle" style={{backgroundImage: `url(${this.props.info.propic})`}}/>
        <div className="business-card-title">{this.props.info.title}</div>
        <div className="business-card-slogan">{this.props.info.slogan}</div>
        <hr className="business-card-line"/>
      </div>
    )
  }
}

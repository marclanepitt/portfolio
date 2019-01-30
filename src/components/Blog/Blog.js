import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';

export default class Blog extends Component {
  render() {
    return (
      <div className="section bottom-left-corner position-2">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(2)}/>
      }
      </div>
    )
  }
}

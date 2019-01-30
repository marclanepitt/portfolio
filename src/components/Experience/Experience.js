import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';

export default class Experience extends Component {
  render() {
    return (
      <div className="section top-left-corner position-0">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(0)}/>
      }
      
      </div>
    )
  }
}

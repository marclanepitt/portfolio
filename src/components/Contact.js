import React, { Component } from 'react'
import CircleArrowBack from './CircleArrowBack';

export default class Contact extends Component {
  render() {
    return (
      <div className="section bottom-right-corner position-3">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(3)}/>
      }      
      </div>
    )
  }
}

import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';
export default class Portfolio extends Component {
  render() {
    return (
      <div className="section top-right-corner position-1">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(1)}/>
      }
     </div>
    )
  }
}

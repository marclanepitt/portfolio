import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PieNav from './components/PieNav';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact';
import $ from "jquery";

import "./static/css/app.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.handleElSelect = this.handleElSelect.bind(this);
    this.backToNav = this.backToNav.bind(this);

    this.state = {
      sections: [<Experience backToNav={this.backToNav}/>, <Portfolio backToNav={this.backToNav}/>, <Blog backToNav={this.backToNav}/>, <Contact backToNav={this.backToNav}/>],
      displayNav:true,
    }

  }

  handleElSelect(e) {
    this.setState({
      sections: [<Experience backToNav={this.backToNav} isExpanded = {true}/>, <Portfolio backToNav={this.backToNav} isExpanded = {true}/>, <Blog backToNav={this.backToNav} isExpanded = {true}/>, <Contact backToNav={this.backToNav} isExpanded = {true}/>],
    })
    let target = parseInt(e.target.getAttribute('data-position'));
    this.state.sections.forEach(function(el, i) {
      if(i !== target) {
        $(".position-"+i).hide();
      }
    });
    if(target !== 2 && target !== 1) {
      $("body").css("background-color", "#2a3138");
    } else {
      $("body").css("background-color", "#323a43");
    }
    $(".position-"+target).animate({
      width: '100%',
      height: '100vh'
    });
    this.setState({
      displayNav:false
    });
  }

  backToNav(target) {
    this.setState({
      sections: [<Experience backToNav={this.backToNav} isExpanded = {false}/>, <Portfolio backToNav={this.backToNav} isExpanded = {false}/>, <Blog backToNav={this.backToNav} isExpanded = {false}/>, <Contact backToNav={this.backToNav} isExpanded = {false}/>],
    })
    this.state.sections.forEach(function(el, i) {
        $(".position-"+i).show();
    });
    $(".position-"+target).animate({
      width: '50%',
      height: '50vh'
    });
    this.setState({
      displayNav:true
    });
  }

  render() {
    return (
      <div className="App">

      {this.state.displayNav &&
        <PieNav handleElSelect={this.handleElSelect} elements={[<i className="fa fa-id-card-o" aria-hidden="true" data-position={0}></i>, <i className="fa fa-picture-o" aria-hidden="true" data-position={1}></i>, <i className="fa fa-pencil" aria-hidden="true" data-position={2}></i>, <i className="fa fa-phone" aria-hidden="true" data-position={3}></i>]}/>
      }
        {this.state.sections}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import "../static/css/pienav.css";

export default class PieNav extends Component {


  render() {
    return (
      <div className="pie-nav-wrapper">
        {this.props.elements.map((el, i) => {
            let style = {};
            let className = ""; 
            style['width'] = '50%';
            style['height'] = '50%';
            
            if(i % 2 == 0) {
                style['float'] = 'left';
            } else {
                style['float'] = 'right';
            }
            switch (i) {
                case 0:
                    style['borderTopLeftRadius'] = '100%';
                    style['backgroundColor'] = '#2a3138';
                    className="pie-nav-top-left";
                    break;
                case 1:
                    style['borderTopRightRadius'] = '100%';
                    style['backgroundColor'] = '#323a43';
                    className="pie-nav-top-right";
                    break;
                case 2:
                    style['borderBottomLeftRadius'] = '100%';
                    style['backgroundColor'] = '#323a43';
                    className="pie-nav-bottom-left";
                    break;
                case 3:
                    style['borderBottomRightRadius'] = '100%';
                    style['backgroundColor'] = '#2a3138';
                    className="pie-nav-bottom-right";
                    break;

            }
            return <div onClick={(e) => {this.props.handleElSelect(e)}} data-position={i} className={"pie-nav-el " + className} key = {i} style={style}>{el}</div>
        })}
      </div>
    )
  }
}

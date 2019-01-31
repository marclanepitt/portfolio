import React, { Component } from 'react';
import "../static/css/pienav.css";
import marcexperience from "../static/img/marcexperience.png";
import marcportfolio from "../static/img/marcportfolio.png";
import marccontact from "../static/img/marccontact.png";
import marcblog from "../static/img/marcblog.png";


export default class PieNav extends Component {

  constructor(props) {
        super(props);
        this.state = {
            showImg:-1
        }
  }

  render() {
    return (
        <div>
        <div className="pie-nav-wrapper">
            {this.props.elements.map((el, i) => {
                let style = {};
                let className = ""; 
                style['width'] = '50%';
                style['height'] = '50%';
                
                if(i % 2 === 0) {
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
                    default:
                        break;

                }
                return <div onMouseEnter={()=>{this.setState({showImg: i})}} onMouseLeave={()=>{this.setState({showImg: -1})}} onClick={(e) => {this.props.handleElSelect(e)}} data-position={i} className={"pie-nav-el " + className} key = {i} style={style}>{el}</div>
            })}
        </div>
        {this.state.showImg === 0 &&
         <img className= "marc-experience" alt="" src={marcexperience} />
        }
        {this.state.showImg === 1 &&
         <img className= "marc-portfolio" alt="" src={marcportfolio} />
        }
        {this.state.showImg === 2 &&
         <img className= "marc-blog" alt="" src={marcblog} />
        }
        {this.state.showImg === 3 &&
         <img className= "marc-contact" alt="" src={marccontact} />
        }
        </div>
    )
  }
}

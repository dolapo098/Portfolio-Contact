import React, { Component } from 'react'
import "./LayOut.css"



export default class LayOut extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="nav" className="navbar">
                    
                    <div className="navbarContainer">
                   <ul>
                        <li id="home"><a className="homeLeft" href ="/">Home</a></li>
                        <li><a href ="/skills">Skills</a></li>
                        <li><a href ="/experience">Experience</a></li>
                        <li><a href ="/github">GitHub</a></li>
                        <li><a href ="/contact">Contact Me</a></li>
                    </ul>
                    </div>
                </nav>              
                {this.props.children}
               
            </React.Fragment>
            
        )
    }
}

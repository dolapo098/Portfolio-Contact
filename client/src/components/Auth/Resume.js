import React, { Component } from 'react'
import LayOut from '../LayOut'
import Header from './Header'
import Intro from './Intro'
import Experience from './Experience'


export default class Resume extends Component {
    render() {
        return (
            <LayOut>
                <div className="containerss"style={{marginTop:30}}>
                    <Header/>
                    <div class="wrapper">
                    <Intro/> 
                    <Experience/>
                    </div> 
                </div>
                <div style={{marginTop:50}}>
                <footer className="footer">
            <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
        </footer>
                </div>
            </LayOut>
        )
    }
}

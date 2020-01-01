

 import React from 'react'
 import "./HomePage.css"
 import "./MediaQuery.css"
import Experience from './Experience'
 
 export default function HomePage(props) {

        return (
            <React.Fragment>
            <header id="header-showcase" className="grid">
                <div className="header-image"></div>
                <div className="content-wrap">
                    <h1>Hello, I am Adedolapo Adaranijo</h1>
                    <small>B.sc Computer Science , Olabisi Onabanjo University, Ogun-state.</small>
                    <p id="pHead">I am a Junior Software developer with Eight months experience in Full stack development.<br/>
                      A conscientious fast learner offering the ability to assess an organization needs and<br/>
                       create a complementary robust web presence.</p>
                </div>   
            </header>
            <main>
                <section id="sectiona" className="grid">
                    <h3>My Recent Projects</h3>
                    <p>The below solutions were developed in the period of October 2019 till Novenber 2019</p>
                </section>
            
                <section id="sectionb">
                    <div>
                        <ul>
                            <li>
                                <div className="card">
                                    <img id="cx" src={require("../../images/Server.jpg")} alt="3cx"></img>
                                    <div className="card-content">
                                        <h3 className="header-card">Customer Detail Records</h3>
                                        <p>A Tcp Server was built to monitor call records from a 3cx voiceremote client through a SIP real time.<br/>
                                            It prompts mail notification toan Agent supervisor if and a call agent dropped the call</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img src={require("../../images/nexmoApi.svg")} alt="sms"></img>
                                    <div className="card-content">
                                        <h3 className="header-card">Sms Reminder</h3>
                                        <p>A node server was built to run automated task schedule from a database to a list of wedding anniversaries,<br/>
                                             birthday celebrants and appointment notifiers as a Messasge</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="sectionc" className="grid">
                    <div className="box">
                        <h3>About Me</h3>
                        <p>My skills set comprises the use of Vanilla Javascript , and  its frameworks (Node & React) for building smart web solutions ,
                             and also  a content manager (Wordpress) for web designing.<br/> Click the link below to explore more about me .</p>
                        <a href="./skills">about me</a>
                    </div>
                    <div className="box">
                        <h3>Contact Me</h3>
                        <p>Please find it neccesaary to visit my contact page , for further progress of discussion</p>
                        <a href="./contact">contact me</a>
                    </div>
                </section>
            </main>
            <footer className="footer" style={{height: 50, marginTop:150}}>
                    <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
                </footer>  
        </React.Fragment>
        )
    }

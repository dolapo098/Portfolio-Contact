import React from 'react'
import "./Experience.css"
import LayOut from '../LayOut'



export default function Experience() {
    return (
        <LayOut>
        <React.Fragment>
        
            <div id="sectiond" className="grid">
                    <h3>My Work Experience</h3>
                    <div className="exp">
                        <h4>Backend Developer | Cedarview Communications | October 1st till date</h4> 
                        <div className="borderBox">
                            <ul>
                                <li>
                                    <p>I developed an Sms reminder server with the aid of Nexmo API , and a Node cron scheduler . The server uses 
                                    Node cron to run a script to the database, and check for anniverssary dates , birthdays amd meetings schedule</p>
                                </li>
                                <li>
                                    <p>I developed a tcp server which communicates real time with a 3cx phone system (Private branch system).
                                        The server was specifically built as a CRM tool to monitor call records  between an
                                        extension line and a client . Most importanly, to escalate situations where a client initiated the call
                                        and a call agent ended the call,the call agent supervisor is immediately notified with the exact records</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp1">
                        <h4>Software Developer | Nesa By makers (Academy) | April 1st 2019 – August 2019</h4>
                        <div className="borderBox">
                            <ul>
                                <li>
                                    <p>Co-developed an E-Commerce website by creating API’s using the necessaryHttp requests (Post, Get, Put and Delete) 
                                    to sendand obtain product information’s.</p>
                                </li>
                                <li>
                                    <p>I engineered a Front end app for scheduling Appointment using technologies which consists of Context and Reducers.</p>
                                </li>
                                <li>
                                    <p>Created  a Blog post component which hits an end point using the CRUD operation </p>
                                </li>
                                <li>
                                    <p>I created a clock app using the Date object and DOM manipulation in vanilla JavaScript.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp2">
                        <h4>IT Support Personnel| Sterling Bank Plc| June 2018 - March 2019</h4>
                        <div className="borderBox">
                            <ul>
                                <li>
                                    <p>I installed of Peripheral devices and configuration of computer software’s. </p>
                                </li>
                                <li>
                                    <p>I managed related requests communicated through the IT service desk via emails 
                                       and Phone calls to resolve hardware and software issues by Users. </p>
                                </li>
                                <li>
                                    <p>I liaised with vendors to resolve issues at different organizational network within my domain. </p>
                                </li>
                                <li>
                                    <p>I always escalate critical issues to my Lead support which are time bound  </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp3">
                    <div className="bd-color"></div>
                        <h4>Software Tester | High-tech Synergy | June 2012 - December 2012 </h4>
                        <div className="borderBox">
                            <ul>
                                <li>
                                    <p>I tested errors on HTS financials (High –Tech Synergy) software used for logistic and gaming use </p>
                                </li>
                                <li>
                                    <p>Queried data presented in a grid view  for accurate results</p>
                                </li>
                                <li>
                                    <p>Presented findings to developers and proposed alternative solutions for implementation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <footer className="footer" style={{height: 50, marginTop: 150}}>
                    <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
                </footer>  
                </div>
                </React.Fragment>
                </LayOut>
    )
}

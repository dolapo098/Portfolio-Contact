import React, { Component } from 'react'
import LayOut from '../LayOut'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import "./Contact.css"
import "./MediaQuery.css"


export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :'',
             email :'',
             message :'',
             phone:'',
             messageDelivered: false
        }
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=  async(e)=>{
        e.preventDefault()
        const{messageDelivered, ...rest}= this.state
        console.log(rest);
        const url= "http://localhost:2000/contactMe"
        try{
            const response= await axios.post(url,rest)
            const data= response.data 
            console.log(data);
            if(data){
                this.setState({
                    messageDelivered : !messageDelivered
                })
            }
        }catch(err){
            console.log(err);
        }
        


    }
    
    render() {
        const {name,email,message,phone,messageDelivered}=this.state
        return (
            <LayOut>
                <div className="contactPage">
                    <form className="my-form" onSubmit={this.onSubmit}>
                        <div className="my-input">
                            <label>Organisation</label>
                            <input type="text" name="name" value={name} onChange={this.onChange}>
                            </input>
                        </div>
                        <div className="my-input">
                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={this.onChange}>
                            </input>
                        </div>
                        <div className="my-input">
                            <label>Comments</label>
                             <textarea  name="message" value={message} onChange={this.onChange}/>
                        </div>

                        <div className="my-input">
                            <label>Mobile Number</label>
                            <input type="number"  name="phone" value={phone} onChange={this.onChange}>
                            </input>
                        </div>
                        <div className="my-input">
                            <button type="submit">Send</button>
                        </div>
                    </form>

                    <div className="fontAwesome">
                        <p className="mobile"><FontAwesomeIcon className="mobileAwesome"  icon={faMobileAlt} 
                        style={{fontSize:42, color:"black", paddingRight:20}}></FontAwesomeIcon>Call me on 08075779204</p>  
                    </div>

                    <div className="fontAwesome2">
                        <p className="email"><FontAwesomeIcon  icon={faEnvelope} 
                        style={{fontSize:35, color:"black",paddingRight:20}}></FontAwesomeIcon>Email: Dolapo098@hotmail.com</p>  
                    </div>

                    <div className="fontAwesome3">
                        <p className="home"><FontAwesomeIcon  icon={faHome} style={{fontSize:28, color:"black"}}>
                        </FontAwesomeIcon>Address: 17 Solomon Neiran Aluko Crescent, Ikosi, Lagos State</p>
                    </div>
                    {messageDelivered && <div className="alert">Message Already Sent !!</div>}

                    <footer id="footerContact" className="footer" style={{height: 50, marginTop: 380}}>
                    <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
                </footer>  
                </div>
            </LayOut>
        )
    }
}

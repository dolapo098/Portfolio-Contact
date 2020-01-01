import React, { Component } from 'react'
import LayOut from '../LayOut'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./GitHub.css"


export default class GitHub extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           avatar_url: "",
           login:"", 
           html_url :" " ,
           view_repo : false 
        }
    }
    
     // Fetch my Github Profile
    getRepo= async ()=>{
        console.log('I was clicked');
        try{
        const url = " https://api.github.com/search/users?q=user:dolapo098"
        const response = await fetch(url);
        const result =  await response.json()
        console.log(result);
        result.items.forEach(res=>{
            this.setState({
                avatar_url: res.avatar_url,
                login : res.login,
                html_url: res.html_url
            })
        })
        }
        catch(err){
            console.log(err)
        }
    }

    //View my Repositories
    viewRepo=()=>{
        this.setState({
            view_repo : !this.state.view_repo
        },()=> console.log(this.state.view_repo));
       
    }
    render() {
        const {avatar_url,html_url, login,view_repo} = this.state;
        return (
            <LayOut>
                <header id ="headerTitle">
                    <h1 >View my public repository on Github</h1>
                </header>
                <main>
                <Button className="success"  variant="success" onClick={this.getRepo}
                  >Check my Github Profile
                  </Button>
                      <Card className="cardd">
                        <Card.Img className="img" variant="top" src={ avatar_url} />
                        <Card.Body>
                            <Card.Title className="login">{login}</Card.Title>
                            <Button variant="primary" className="primary" onClick={this.viewRepo}>Click to view my repository below</Button>
                        </Card.Body>
                        {view_repo && (<div className="gitLayout">
                      <h3><a href={html_url}>{login}</a></h3>
                    </div>)}

                    </Card>
                </main>
                <footer className="footer" style={{height: 50, marginTop: 10}}>
                    <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
                </footer>  
          
            </LayOut>
        )
    }
}

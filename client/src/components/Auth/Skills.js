import React, { Component } from 'react'

import LayOut from "../LayOut"
import { Bar} from 'react-chartjs-2'
import "./Skills.css"
import "./MediaQuery.css"


export default class Skills extends Component {
  constructor(props) {
      super(props)

      this.state ={
          chartData :{
              labels :['Vanilla Javascrript',"NodeJs","ReactJs","WordPress","C#","MySql","MongoDB"],
              datasets:[
                  {
                label: 'Average of 10',
                data: [6,5,5,4,4,5,6],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
              }
            ] //dataSets

          }
        }
  }
   
    render() {
        return (
            <LayOut>
                <header>
                    <h1> I introduce to you my world of Web Programming</h1>
                </header>
                <main>
                    <section id="seca" className="sec">
                    <div className="chart" style={{position:"relative", height:450, width:900, left:-400}}>
                   <Bar type="bar" className='bar'  data={this.state.chartData} 
                   options={{
                       title:{
                           display:true,
                           text:"Skill Set",
                           position:'top',
                           fontSize: 25
                       },
                       layout:{
                           padding:{
                               left: 400,
                               bottom:0,
                               top: 60
                           }
                       },
                       legend:{
                           display: true,
                           position:"left"
                       }
                   }} />
                 </div>    
                </section>

                 <div className="skillset">
                    <div className="skillbox">
                        <h3>Javascript as a Dynamic Language</h3>
                        <p id="pone">Javascript is easy to understand ,in my early days i was working with declaration of a 
                        <strong>data-type and variable</strong>,but now i create dynamic variablles with <strong>Var x=[
                        string, number, objects, booleans]</strong>.
                        The code is also dynamic ; You can create new functions at any time, or replace existing functions.  
                        when used in a browser, code is added when more script files are loaded, and you can load more files any time you like. 
                        I have worked with both ReactJs and NodeJs to  two power applications on an enterprise level.
                        You can clone some of my recent projects on my Github Page </p>
                    </div>
                    <div className="skillbox">
                        <h3 id="htwo">WordPress Development</h3>
                        <p id="ptwo">Its the most widely used content manager to design websites and blog pages in the world 
                        The platform provides rich  features like SEO plugin  which makes my content more magnetic to search engines 
                         and Plugins ,which makes me add my personality to already built contents
                         Wordpress was delivered with PHP/My-SQL. PHP code can be inserted into the HTML of a Web page .
                         The combination of PHP and MySQL also gives unmet options to create just about any kind of website,
                          from small contact form to large corporate portal.
                        </p>
                </div> 
                <div className="skillbox">
                        <h3 id="htwo">Node Js</h3>
                        <p>Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful 
                            for developing applications that require a persistent connection from the browser to the server and is often used 
                            for real-time applications such as chat, news feeds and web push notifications.</p>
                </div>
                <div className="skillbox">
                        <h3 id="htwo">React Js</h3>
                        <p>React made it painless to create interactive UIs. I designed simple views for each state in ny application, 
                            and it also efficiently update and render just the right components when the data changes.</p>
                </div>

            </div>
            </main>   
            <footer id="footerContact" className="footer" style={{height: 50, marginTop: 180}}>
                    <p className="footerp"> Copyright ©2019  Adedolapo's portfolio, 08075779204</p>
            </footer>
                    
            </LayOut>
        )
    }
}

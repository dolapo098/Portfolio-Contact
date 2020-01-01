import React from 'react'

import {BrowserRouter as R, Route} from 'react-router-dom';
import Skills from "../components/Auth/Skills"
import Experience from "../components/Auth/Experience"
import GitHub from "../components/Auth/GitHub"
import Contact from "../components/Auth/Contact"
import HomePage from "../components/Auth/HomePage"
import LayOut from "./LayOut"


const CustomRouter= ()=>{
    return(
        
       <React.Fragment>
             {/* <LayOut/> */}
            <R>
            <Route path="/" exact component={LayOut}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/skills" exact component={Skills}></Route>
            <Route path="/experience" exact component={Experience}></Route>
            <Route path="/github" exact component={GitHub}></Route>  
            <Route path="/contact" exact component={Contact}></Route>
        </R>
       </React.Fragment>
      
    )

}

export default CustomRouter;
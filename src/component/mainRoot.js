import React,{ Fragment }from "react";
import {Header,Footer} from "./../layout";
import { Link, BrowserRouter as Router } from 'react-router-dom';

export class MainRoot extends React.Component
{
    render(){
        return (
            <Router>
            <Fragment>
            <Header/>
            {this.props.children}
            <Footer/>
            </Fragment>
            </Router>
        );
    }
}

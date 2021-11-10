import React, {Component} from 'react';
import Logo from '../../Images/Logo.png';
 
export default class Header extends Component {
    render(){
        return (
        <header id="header" className="border d-flex align-items-baseline">
        <h1><img src={Logo} alt="Forbes Services LLC" width="150" height="150"></img>Forbes Services LLC.</h1>
        </header>
 
        )
    }
}
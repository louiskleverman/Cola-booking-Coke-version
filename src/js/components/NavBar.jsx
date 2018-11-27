import React from 'react'
import '../../css/NavBar.css'
import { NavLink } from 'react-router-dom';
import Navigation from "./Navigation.jsx"

class NavBar extends React.Component{
    
    render(){
        let indexes = [];
        return(
        <React.Fragment>
            <div className="NavBar">
                <Navigation address={this.props.address}/>
                <div className="Banner">
                    <img src="../../images/coca-cola.png"/>
                    <p>Booking application</p>
                </div>
            </div>
        </React.Fragment>
        );
    }

}

export default NavBar
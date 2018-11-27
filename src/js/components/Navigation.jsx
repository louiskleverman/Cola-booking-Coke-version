import React from 'react'
import '../../css/Navigation.css'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
    
    render(){
        let indexes = [];
        return(
        <React.Fragment>
            <div className="Navigation">
                
                <img src="../../images/coca-cola.png"/>
               <a href="#Bookings">Bookings</a>
               <a href="#Authorization">Authorization</a>

               <div className="address">
                    {
                        this.props.address != null ?
                        this.props.address :
                        <span> No injection detected <a>help?</a></span>
                    }
                </div>
            </div>
        </React.Fragment>
        );
    }

}

export default NavBar
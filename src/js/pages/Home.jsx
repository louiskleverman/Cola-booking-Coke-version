import React from 'react'
import '../../css/home.css'
import Bookings from "../components/Bookings.jsx"
import Authorization from "../components/Authorization.jsx"

class Home extends React.Component{
    
    render(){
        return(
        <React.Fragment>
            <div className="home container">
                <div className="introduction">
                    <h1>Welcome to the Coca-Cola booking app</h1>

                    <h3>Sed malesuada mollis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu non quam malesuada tempus. 
                        Sed malesuada mollis tempus. Morbi vestibulum libero eget justo pellentesque posuere. 
                        Pellentesque enim nunc, convallis sed lectus sit amet, scelerisque maximus tellus. Curabitur eu lorem magna. 
                        Aliquam sodales lorem in risus facilisis, sit amet feugiat purus iaculis. Quisque quis sapien enim. Praesent orci tellus, 
                        eleifend viverra efficitur eu, aliquet a diam. Mauris scelerisque orci id consectetur vulputate. Cras nec turpis orci. 
                        Sed eu mattis lorem, in cursus ex.
                    </p>

                    <Bookings reserve={this.props.reserve} state={this.props.state}/>
                    <Authorization addAuthorization={this.props.addAuthorization} state={this.props.state}/>
                </div>

                

            </div>
        </React.Fragment>
        );
    }

}

export default Home
import React from 'react'
import "../../css/Authorization.css"
import Authorized from "./Authorized.jsx"

class Authorization extends React.Component{

    render(){
        let addresses = [];
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");
        addresses.push("0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911");


        return(
           <div id="Authorization">
                 <h3>Booking authorization</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu non quam malesuada tempus. 
                        Sed malesuada mollis tempus. Morbi vestibulum libero eget justo pellentesque posuere. 
                        Pellentesque enim nunc, convallis sed lectus sit amet, scelerisque maximus tellus. Curabitur eu lorem magna. 
                        Aliquam sodales lorem in risus facilisis, sit amet feugiat purus iaculis. 
                    </p>
                <div className="addAuthorization">
                    <h2>Add Authorization</h2>
                    <input type="text" id="inputAddress" placeholder="Address"/>
                    <button onClick={this.addAuthorization}>add</button>
                </div>
                <div className="authorizationList">
                    {
                        this.props.state.accounts != null ?
                        this.props.state.accounts.map(address => (
                            address != "0x0000000000000000000000000000000000000000" ?
                            <Authorized state={this.props.state} address={address}/>
                            : ""
                        ))
                        : ""
                    }
                </div>
           </div>
        );
    }

    addAuthorization = () =>{
        let authorized = document.getElementById("inputAddress").value;
        this.props.addAuthorization(authorized);
    }

}

export default Authorization
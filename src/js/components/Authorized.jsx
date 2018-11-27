import React from 'react'
import "../../css/Authorized.css"

class Authorized extends React.Component{
    state = {
        address:null
    }

    componentDidMount() {
        let address = this.props.address;
        this.setState({address}); 
        //console.log("room",room)
    }

    render(){
        let addClasses = "";
        if(this.props.state.account == this.state.address)
            addClasses += " current"
        return( 
            <div className={"address" + addClasses}>
                {
                    this.state.address
                } 
                <i className="fas fa-times" onClick={this.removeAuthorization}></i>
            </div>
        );
    }

    removeAuthorization = () =>{
        this.props.state.bookingInstance.removeCokeEmployee(this.state.address,{from:this.props.state.account}).then(()=>{
            alert("Authorization removed")
        });
    }

}

export default Authorized
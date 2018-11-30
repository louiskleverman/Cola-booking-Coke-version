import React from 'react'
import '../../css/bookings.css'

class Bookings extends React.Component{
    state = {
        room : 0
    }

    render(){
        let rooms = [];
        let firstHalf = [];
        let secondHalf = [];
        if(this.props.state.bookings != null){
            for(let i = 0 ; i < this.props.state.bookings.length ; i ++){
                rooms.push(i);
            }  
            //from 6am to 12am
            for(let i = 0 ; i < 6 ; i++){
                firstHalf.push(this.props.state.bookings[this.state.room][i]);
            } 
            //from 12am to 8pm
            for(let i = 6 ; i < 14 ; i++){
                secondHalf.push(this.props.state.bookings[this.state.room][i]);
            } 
        }
            
        //console.log("secondHalf",secondHalf);
        //console.log("rooms",rooms);
        return(
            <div id="Bookings">
                <div className="roomSelect">Room n°
                    <select id="selectRoom" onChange={this.changeRoom}>
                        {
                            rooms.map(room =>(
                                <option value={room+1}>{room+1}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="rooms">
                    <div className="firstRoom roomRow">
                        <div className="begining">6h</div>
                        <div className="end">12h</div>
                        {
                            firstHalf.map(room=>(
                                <div 
                                className={"reservation company" + room.company} 
                                data-toggle="tooltip" data-placement="top"  title={room.reserver}>
                                    <div className="information" onClick={()=>this.reserve(room.room,room.hour)} >
                                        {room.hour+6}h - {room.hour+7}h
                                    </div>
                                    {
                                        this.props.state.account == room.reserver ?
                                        <i className="delete fas fa-times" onClick={() => this.removeReservation(room.room,room.hour)}></i>
                                        : ""
                                    }
                                    
                                </div>
                            ))
                        }
                    </div>
                    <div className="secondRoom roomRow">
                        <div className="begining">12h</div>
                        <div className="end">20h</div>
                        {
                            secondHalf.map(room=>(
                                <div 
                                className={"reservation company" + room.company} 
                                data-toggle="tooltip" data-placement="top"  title={room.reserver}>
                                    <div className="information" onClick={()=>this.reserve(room.room,room.hour)} >
                                        {room.hour+6}h - {room.hour+7}h
                                    </div>
                                    {
                                        this.props.state.account == room.reserver ?
                                        <i className="delete fas fa-times" onClick={() => this.removeReservation(room.room,room.hour)}></i>
                                        : ""
                                    }
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }

    changeRoom = () =>{
        let room = document.getElementById("selectRoom").value -1;
        this.setState({room});
    }

    reserve = (room,hour) => {
        //alert("Room : " + room + "  hour : " + hour)
        this.props.reserve(room,hour);
    }

    removeReservation = (room,hour) =>{
        this.props.state.bookingInstance.cancelReservation(room,hour,{from:this.props.state.account}).then(()=>{
            alert("Canceled!")
        });
    }

}

export default Bookings
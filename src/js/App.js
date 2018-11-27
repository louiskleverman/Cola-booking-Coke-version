import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Booking from '../../build/contracts/Booking.json'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter , Route, Switch} from "react-router-dom"
import Home from "./pages/Home.jsx"
import NavBar from "./components/NavBar.jsx"
import "./index.js"

class App extends React.Component {
  state = {
    account: '0x0',
    bookingInstance: null,
    accountInterval: null,
    web3: null,
    bookings: null,
    accounts:null
  }

  constructor(props) {
    super(props)

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.state.web3 = new Web3(this.web3Provider)

    this.booking = TruffleContract(Booking)
    this.booking.setProvider(this.web3Provider)

    this.state.account = this.state.web3.eth.accounts[0]

  }

  componentDidMount() {

    this.booking.deployed().then((bookingInstance) => {
      this.setState({bookingInstance});
      
      this.state.accountInterval = setInterval(() =>{
        this.loadBookings();
        this.loadAccounts();
        if (this.state.web3.eth.accounts[0] !== this.state.account) {
          var account = this.state.web3.eth.accounts[0];
          this.setState({ account });
        }
      }, 500);
    });

    

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar address={this.state.account}/>
          <Switch>
            <Route path="/" render={(props) => <Home 
              reserve={this.reserve} 
              state={this.state}
              addAuthorization={this.addAuthorization}
              />} 
              exact/> />
          </Switch>  
        </div>
      </BrowserRouter>
    );
  
  }

  loadBookings = () =>{
    
    this.state.bookingInstance.getBookings.call().then((bookingsres) =>{
      let bookings = [];
      for(var i = 0 ; i < bookingsres[0].length ; i++){
        bookings[i] = [];
        for(var j = 0 ; j < bookingsres[0][i].length ; j++){
          bookings[i][j] = {};
          bookings[i][j].company = parseInt(bookingsres[0][i][j]);
          bookings[i][j].reserver = bookingsres[1][i][j];
          bookings[i][j].room = i;
          bookings[i][j].hour = j;
        }
      }
      //console.log(bookings);
      
      this.setState({bookings})
    });
  }
  
  loadAccounts = () => {
    this.state.bookingInstance.getCokeEmployees.call().then((accounts)=>{
      //console.log("accounts",accounts)
      this.setState({accounts});
    })
  }

  reserve = (room,hour) =>{
    this.state.bookingInstance.reservePepsi(room,hour,{from:this.state.account}).then(()=>{
      alert("Reserved!")
    });
  }
  removeReservation = (room,hour) =>{
      this.state.bookingInstance.cancelReservation(room,hour,{from:this.state.account}).then(()=>{
        alert("Canceled!")
      });
  }
  
  addAuthorization = (address) =>{
    this.state.bookingInstance.addCokeEmployee(address,{from:this.state.account}).then(()=>{
      alert("Authorization added!");
    });
  }

}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)

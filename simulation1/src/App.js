import React, { Component } from 'react';
import shelfie from './component/images/shelfie.png'
import axios from 'axios'
import './App.css';
import Header from './component/header/Header';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Products from './component/products/Product';
import { join } from 'path';


class App extends Component {
  constructor(){
    super()
    this.state={
      inventory:[]
    }

  }
shop(){
    axios.get('api/inventory').then(res =>{
      this.setState({
        inventory:res.data
      })
    })
  }
  // componentDidMount(){
  //   axios.get('api/inventory',{}).then(res =>{
  //     console.log(res)
  //     this.setState({inventory:res.data})

  //   })
  // }
  
//////////////////METHODS//////////////
// newItem =()=>{}



  render() {
    return (
      <div className="App">
      <Header/>
       <Dashboard
       inventory={this.shop}/>
      <div className='main'>
       <Products/>
       <Form
       newItem={this.newItem}/>
       </div>
      </div>
    );
  }
}

export default App;

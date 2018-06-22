import React, { Component } from 'react';

import './App.css';
import Header from './component/header/Header';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Products from './component/products/Product';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
       <Dashboard/>
       <Form
       />
       <Products/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import axios from 'axios'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            image:'',
            product:'',
            price:''

        }


    }
    handleChangeImage = (event) => {
        this.setState({
            image:event.target.value
        })

    };


    handleChangeProduct = (event) =>{
        this.setState({
            product:event.target.value
        })
    };

    handleChangePrice = (event) =>{
        this.setState({
            price:event.target.value
        })
    };


    handleClick=()=>{
        this.setState({
            image:'',
            product:'',
            price:''
        })
    }

    addToInventory(){
        axios.post

    }





    render(){
        return(
            <div className='form'>
            Form
                <p><input type="text" placeholder='ImageUrl' value={this.state.image}
                onChange={this.handleChangeImage}/></p>
                <p><input type="text"placeholder='Product Name...' value={this.state.product}
                onChange={this.handleChangeProduct}/></p>
                <p><input type="number" placeholder='Price $0.00' value={this.state.price}
                onChange={this.handleChangePrice}/></p>
                <button
                onClick={()=>{this.handleClick()}}>Cancel</button>
                <button
                onClick={()=>{this.addToInventory()}}>Add to Inventory</button>
            </div>
        )
    }
}
export default Form;
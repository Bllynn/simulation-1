import React, { Component } from 'react'
class Form extends Component{
    constructor(){
        super()
        this.state={
            product:'',
            price:0,
            descripton:''

        }


    }





    render(){
        return(
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>Cancel</button>
                <button>Add</button>
            Form
            </div>
        )
    }
}
export default Form;
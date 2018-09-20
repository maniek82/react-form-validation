import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname:''
    }

    handleChangeName = (event) => {
       this.setState({
           name: event.target.value
       })
    }
     handleChangeLastname = (event) => {
        this.setState({
            lastname: event.target.value
        })
     }

     onSubmitFormHandler = (event) => {
         event.preventDefault();
         console.log(this.state)
     }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmitFormHandler}>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input
                        type="text"
                        value={this.state.name}
                        onChange = {this.handleChangeName}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input 
                        type="text"
                        value= {this.state.lastname}
                        onChange = {this.handleChangeLastname}
                        
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;
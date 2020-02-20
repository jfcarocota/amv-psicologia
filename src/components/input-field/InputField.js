import React from 'react'

export default class InputField extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            placeholder : props.placeholder ? props.placeholder : 'Name' 
        }
    }

    render() {

        const{placeholder} = this.state;

        return (
            <input class="form-control" id="name" type="text" placeholder={placeholder} required="required" data-validation-required-message="Please enter your name."/>
        );
    }
}
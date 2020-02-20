import React from 'react'
import FieldItem from '../field-item/FieldItem';

export default class InputField extends FieldItem{

    render() {

        const{placeholder} = this.state;

        return (
            <input class="form-control" id="name" type="text" placeholder={placeholder} required="required" data-validation-required-message="Please enter your name."/>
        );
    }
}
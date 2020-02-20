import React from 'react'
import FieldItem from '../field-item/FieldItem';

export default class EmailField extends FieldItem{

    render() {

        const{placeholder} = this.state;

        return (
            <input class="form-control" id="email" type="email" placeholder={placeholder} required="required" data-validation-required-message="Please enter your email address."/>
        );
    }
}
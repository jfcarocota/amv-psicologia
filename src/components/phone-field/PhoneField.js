import React from 'react'
import FieldItem from '../field-item/FieldItem';

export default class PhoneField extends FieldItem{

    render() {

        const{placeholder} = this.state;

        return (
            <input class="form-control" id="phone" type="tel" placeholder={placeholder} required="required" data-validation-required-message="Please enter your phone number."/>
        );
    }
}
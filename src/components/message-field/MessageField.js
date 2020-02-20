import React from 'react'
import FieldItem from '../field-item/FieldItem';

export default class MessageField extends FieldItem{

    render() {

        const{placeholder} = this.state;

        return (
            <textarea class="form-control" id="message" rows="5" placeholder={placeholder} required="required" data-validation-required-message="Please enter a message."/>
        );
    }
}
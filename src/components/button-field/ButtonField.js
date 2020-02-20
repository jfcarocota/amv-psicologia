import React from 'react'
import FieldItem from '../field-item/FieldItem';

export default class ButtonField extends FieldItem{

    render() {

        const{placeholder} = this.state;

        return (
            <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">{placeholder}</button>
        );
    }
}
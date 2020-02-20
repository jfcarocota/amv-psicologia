import React from 'react'

export default class FieldItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            placeholder : props.placeholder ? props.placeholder : 'Name' 
        }
    }
}
import React from 'react'

export default class Row extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content : props.content ? props.content : <div>Your content here</div>
        }
    }
    render() {

        const {content} = this.state;

        return (
        <div className="row">{content}</div>
        );
    }
}
import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content : props.content ? props.content : 'Your content here'
        }
    }

    render(){
        const {content} = this.state;
        return <div className="container">{content}</div>
    }
}
import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content : props.content ? props.content : 'Your content here',
            flex : props.felx == 1 ? 'container d-flex align-items-center flex-column' : 'container'
        }
    }

    render(){
        const {content, flex} = this.state;
        return <div className={flex}>{content}</div>
    }
}
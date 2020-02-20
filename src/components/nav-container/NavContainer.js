import React from 'react'

export default class NavContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            content : props.content ? props.content : <div>Your content here</div>
        }
    }
    render() {
        const{content} = this.state;
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                {content}
            </nav>
        );
    }
}
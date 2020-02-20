import React from 'react'

export default class AboutCol extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            content: props.content ? props.content : 'your content here'
        }
    }

    render(){

        const {content} = this.state;

        return(
            <div className="col-lg-4 ml-auto">
                <p className="lead">
                    {content}
                </p>
            </div>
        );
    }
}
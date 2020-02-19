import React from 'react'

export default class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.name ? props.name : 'Psicólogo Arnulfo',
            color : props.color ? props.color :'#fff'  
        }
    }
    
    render(){
        const {name, color} = this.state;
        return(
             <a href="#page-top"
                className="navbar-brand js-scroll-trigger"
                style={{
                    color: color
                }}
            >{name}</a>
        );
    }
}
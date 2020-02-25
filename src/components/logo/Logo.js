import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <AnchorLink
             className="navbar-brand js-scroll-trigger" 
             href="#page-top"
             style={{
                color: color
            }}
             >{name}</AnchorLink>
        );
    }
}
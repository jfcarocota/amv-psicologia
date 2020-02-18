import React from 'react'

export default class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.name ? props.name : 'Psicologo Arnulfo Marquez Navarro',
            color : props.color ? props.color :'#fff'  
        }
    }
    render(){
        const {name, color} = this.state;
        return(
             <h1 
                style={{
                    color: color
                }}
            >{name}</h1>
        );
    }
}
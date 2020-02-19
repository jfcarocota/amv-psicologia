import React from 'react'

export default class MenuLink extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : props.name ? props.name : 'default',
            href : props.href ? props.href :'#'  
        }
    }
    
    render(){
        const {href, name} = this.state;
        return(
            <li className="nav-item mx-0 mx-lg-1">
                <a 
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" 
                    href={href} 
                >
                    {name}
                </a>
            </li>
        );
    }
}
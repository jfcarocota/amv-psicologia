import React from 'react'
import MenuLink from '../menu-link/MenuLink';

export default class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            options : props.options ? props.options : <MenuLink name="Your option 1" href="#"/>
        }
    }


    render() {

        const{options} = this.state;

        return (
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                {options}
            </ul>
        </div>
        );
    }
}
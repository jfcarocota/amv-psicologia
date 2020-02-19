import React from 'react'
import Logo from '../logo/Logo'
import MenuLink from '../menu-link/MenuLink';
import Container from '../container/Container'

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                 <div className="container">
                    <Logo/>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <MenuLink name="Consultorio" href="#portfolio"/>
                            <MenuLink name="Acerca de" href="#about"/>
                            <MenuLink name="Contacto" href="#contact"/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
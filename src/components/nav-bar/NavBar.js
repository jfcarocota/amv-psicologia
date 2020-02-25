import React from 'react'
import Logo from '../logo/Logo'
import MenuLink from '../menu-link/MenuLink'
import Container from '../container/Container'
import Menu from '../menu/Menu'
import NavContainer from '../nav-container/NavContainer'
import MenuButton from '../menu-button/MenuButton'


export default class NavBar extends React.Component{
    render(){

        const options = [
            <MenuLink name="Consultorio" href="#portfolio"/>,
            <MenuLink name="Acerca de" href="#about"/>,
            <MenuLink name="Contacto" href="#contact"/>
        ];

        const menu = <Menu options={options}/>;

        const nav = [
            <Logo/>,
            <MenuButton name='menu'/>,
            menu
        ];

        return(
            <NavContainer content={<Container content={nav}/>}/>
        );
    }
}
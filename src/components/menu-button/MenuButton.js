import React from 'react'

export default class MenuButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : props.name ? props.name : 'Name here'
        }
    }
     render() {
         const {name} = this.state;
         return (
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                {name}
                <i class="fas fa-bars"></i>
            </button>
         );
     }
}
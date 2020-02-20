import React from 'react'
import Logo from '../logo/Logo'

export default class TitleSection extends Logo{
    
    render() {

        const {name, color} = this.state;

        return (
        <h2 
            className="page-section-heading text-center text-uppercase"
            style={{
                color: color
            }}
        >
            {name}
        </h2>
        );
    }
}
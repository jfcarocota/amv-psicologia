import React from 'react'
import Logo from '../logo/Logo'

export default class TitlePerson extends Logo{

    render(){
        const {name, color} = this.state;
        return(
            <h1
                className="masthead-heading text-uppercase mb-0"
                style={{
                    color: color
                }}
            >
                {name}
            </h1>
        );
    }
}
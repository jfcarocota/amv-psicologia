import React from 'react'
import profileDefault from '../../default-avatar.png'
import { render } from '@testing-library/react';

export default class ProfileImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture : props.picture ? props.picture : profileDefault
        }
    }

    render(){
        const {picture} = this.state;
        return(
            <img 
                className="masthead-avatar mb-5"
                src={picture}
                alt=""
            />
        );
    }
}

import React from 'react'
import ProfileImage from '../profile-image/ProfileImage'

export default class GridImage extends ProfileImage{

    render(){
        const {picture} = this.state;
        return(
            <img 
                className="img-fluid" 
                src={picture} 
                alt=""
            />
        );
    }
}
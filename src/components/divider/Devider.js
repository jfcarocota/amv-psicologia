import React from 'react'

export default class Devider extends React.Component{

    render(){
        return(
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"/>
                <div className="divider-custom-icon"/>
                <div className="divider-custom-line"/>
            </div>
        );
    }
}
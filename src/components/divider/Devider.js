import React from 'react'

export default class Devider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            colorMode : props.colorMode == 1 ? 'divider-light' : ''
        }
    }
    render(){
        const {colorMode} = this.state;
        return(
            <div className={`divider-custom ${colorMode}`}>
                <div className="divider-custom-line"/>
                <div className="divider-custom-icon"/>
                <div className="divider-custom-line"/>
            </div>
        );
    }
}
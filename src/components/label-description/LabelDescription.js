import React from 'react'

export default class LabelDescription extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label : props.label ? props.label : ['Your content here', 'Your content here']
        }
    }

    render() {
        const {label} = this.state;
        return (
             
            <p className="masthead-subheading font-weight-light mb-0">{label.join().replace(/,/g, ' - ')}</p>
        );
    }
}
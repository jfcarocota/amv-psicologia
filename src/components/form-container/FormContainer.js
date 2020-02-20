import React from 'react'

export default class FormContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content: props.content ? props.content : <div>>Your content here</div>
        }
    }

    render() {

        const{content} = this.state;

        return (
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        {content}
                    </form>
                </div>
            </div>
        );
    }
}
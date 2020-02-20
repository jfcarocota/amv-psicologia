import React from 'react'

export default class FormItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name ? props.name : 'Field name here',
            field : props.field ? props.field : <input placeholder="your input"/>,
            clean: props.clean ? props.clean : 0
        }
    }

    render() {

        const{field, name, clean} = this.state;

        const cleanGroup =
            <div class="form-group">
                {field}
            </div>;
        

        const normalGroup = 
            <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>{name}</label>
                    {field}
                    <p class="help-block text-danger"></p>
                </div>
            </div>;
        
            if(clean === 1){
                return (
                    cleanGroup
                );

            }else{
                return (
                    normalGroup
                );
            }
    }

}
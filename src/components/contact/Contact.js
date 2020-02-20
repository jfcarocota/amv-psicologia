import React from 'react'
import Devider from '../divider/Devider'
import TitleSection from '../title-section/TitleSection'
import FormItem from '../form-item/FormItem';
import InputField from '../input-field/InputField';

export default class Contact extends React.Component{
    render() {
        return (
            <section class="page-section" id="contact">
                <div class="container">
                <TitleSection name="Contacto" color="#000"/>
                <Devider/>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <FormItem 
                            field={
                                <InputField placeholder="Name"/>
                            }
                        />
                        <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                            <p class="help-block text-danger"></p>
                        </div>
                        </div>
                        <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                            <p class="help-block text-danger"></p>
                        </div>
                        </div>
                        <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        </div>
                        <br/>
                        <div id="success"></div>
                        <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                        </div>
                    </form>
                    </div>
                </div>

                </div>
            </section>
        );
    }
}
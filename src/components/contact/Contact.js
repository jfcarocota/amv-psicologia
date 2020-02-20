import React from 'react'
import Devider from '../divider/Devider'
import TitleSection from '../title-section/TitleSection'
import FormItem from '../form-item/FormItem';
import InputField from '../input-field/InputField';
import EmailField from '../email-field/EmailField';
import PhoneField from '../phone-field/PhoneField';
import MessageField from '../message-field/MessageField';
import ButtonField from '../button-field/ButtonField';

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
                        <FormItem field={<InputField placeholder="Nombre"/>}/>
                        <FormItem field={<EmailField placeholder="Correo electrónico"/>}/>
                        <FormItem field={<PhoneField placeholder="Número de teléfono"/>}/>
                        <FormItem field={<MessageField placeholder="Mensaje"/>}/>
                        <br/>
                        <div id="success"></div>
                        <FormItem clean={1} field={<ButtonField placeholder="Enviar"/>}/>
                    </form>
                    </div>
                </div>

                </div>
            </section>
        );
    }
}
import React from 'react'
import profile from '../../arnulfo.jpg'
import TitlePerson from '../title-person/TitlePerson'
import LabelDescription from '../label-description/LabelDescription'
import Devider from '../divider/Devider'
import ProfileImage from '../profile-image/ProfileImage'
import Container from '../container/Container'

export default class MasterHead extends React.Component{

    render(){

        const areas = ['Ansiedad', 'Depresión', 'Psicología Clínica'];
        const content = 
            <div>
                    <ProfileImage picture={profile}/>
                    <TitlePerson name="Lic. Arnulfo Márquez Navarro" color="#fff"/>
                    <Devider colorMode={1}/>
            </div>;
            
        return(
            <header className="masthead bg-primary text-white text-center">
                <Container content={content} flux={1}/>
                <LabelDescription label={areas}/>
            </header>
        );
    }
}
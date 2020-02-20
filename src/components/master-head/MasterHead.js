import React from 'react'
import profile from '../../arnulfo.jpg'
import TitlePerson from '../title-person/TitlePerson'
import LabelDescription from '../label-description/LabelDescription'
import Devider from '../divider/Devider'
import ProfileImage from '../profile-image/ProfileImage'

export default class MasterHead extends React.Component{

    render(){
        const areas = ['Ansiedad', 'Depresión', 'Psicología Clínica'];
        return(
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <ProfileImage picture={profile}/>
                    <TitlePerson name="Lic. Arnulfo Márquez Navarro" color="#fff"/>
                    <Devider colorMode={1}/>
                </div>
                    <LabelDescription label={areas}/>
            </header>
        );
    }
}
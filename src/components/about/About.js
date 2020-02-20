import React from 'react'

import Devider from '../divider/Devider'
import AboutCol from '../about-col/AboutCol'
import TitleSection from '../title-section/TitleSection';

export default class About extends React.Component{

    render() {
        return (
            <section className="page-section bg-primary text-white mb-0" id="about">
              <div className="container">
                <TitleSection name="Acerca de"/>
                <Devider colorMode={1}/>
                <div className="row">
                    <AboutCol
                        content="¿Te da miedo ir con el psicólogo?- PSICOCOFFE #1
                        Ψ Arnulfo Márquez Navarro ™
                        •Tu amigo psicólogo en instagram.
                        •Sigueme, se parte de mi comunidad."
                    />
                    <AboutCol
                        content="Durango entre Allende e Hidalgo #160
                        Ciudad Obregón 85100"
                    />
                </div>

              </div>
            </section>
        );
    }
}
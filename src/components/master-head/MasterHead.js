import React from 'react'
import profile from '../../arnulfo.jpg'

export default class MasterHead extends React.Component{

    render(){
        return(
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img 
                        className="masthead-avatar mb-5"
                        src={profile}
                        alt=""
                    />
                    <h1 className="masthead-heading text-uppercase mb-0">Arnulfo Marquez Navarro</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Ansiedad - Depresión - Psicología clínica</p>
                </div>
            </header>
        );
    }
}
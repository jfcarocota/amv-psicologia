import React from 'react'

import Devider from '../divider/Devider'
import GridElement from '../grid-element/GridElement'
import TitleSection from '../title-section/TitleSection';

export default class GridInfo extends React.Component{

    render(){
        return(
            <section class="page-section portfolio" id="portfolio">
                <div class="container">

                    <TitleSection name="Clínica" color="#000"/>

                    <Devider/>

                    <div class="row">
                        <GridElement/>
                        <GridElement/>
                        <GridElement/>
                        <GridElement/>
                        <GridElement/>
                        <GridElement/>
                    </div>

                </div>
            </section>
        );
    }
}
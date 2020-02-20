import React from 'react'

import Devider from '../divider/Devider'
import GridElement from '../grid-element/GridElement'

export default class GridInfo extends React.Component{

    render(){
        return(
            <section class="page-section portfolio" id="portfolio">
                <div class="container">

                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Clínica</h2>

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
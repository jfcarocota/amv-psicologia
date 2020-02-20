import React from 'react'

import Devider from '../divider/Devider'
import GridElement from '../grid-element/GridElement'
import TitleSection from '../title-section/TitleSection'
import Container from '../container/Container'
import Row from '../row/Row'

export default class GridInfo extends React.Component{

    render(){

        const rowContent =[
                <GridElement/>,
                <GridElement/>,
                <GridElement/>,
                <GridElement/>,
                <GridElement/>,
                <GridElement/>,
        ]; 
        const content = [
            <div><TitleSection name="Clínica" color="#000"/></div>,
            <div><Devider/></div>,
            <div>
                <Row content={rowContent}/>
            </div>
        ];

        return(
            <section class="page-section portfolio" id="portfolio">
                <Container content={content}/>
            </section>
        );
    }
}
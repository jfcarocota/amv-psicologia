import React from 'react'
import GridImage from '../grid-image/GridImage'

export default class GridElement extends React.Component{

    render(){
        return(
            <div className="col-md-6 col-lg-4">
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                    </div>
                    <GridImage/>
                </div>
            </div>
        );
    }
}
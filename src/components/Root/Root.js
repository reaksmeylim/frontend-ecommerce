import React, { Component } from 'react';

import ProductCard from '../ProductCard/ProductCard'
import PaginationComponent from '../Pagination/Pagination'


class Root extends Component {


    render() {

        return (
            <div className="container">

                <ProductCard />
                <div className="d-flex justify-content-center">
                   
                    <PaginationComponent />
                    <br/>
                </div>


            </div>

        );
    }
}

export default Root;
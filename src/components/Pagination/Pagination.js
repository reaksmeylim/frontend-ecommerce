/* eslint func-names: 0, no-console: 0 */
import React from 'react';

import 'rc-pagination/assets/index.css';

import './Pagination.css'

export default class PaginationComponent extends React.Component {
    state = {
        current: 1,
    };
    onChange = (page) => {

        this.setState({
            current: page,
        });
    }
    render() {
        // return <Pagination onChange={this.onChange} current={this.state.current} total={20}/>;
        return (<div className="pagination">

            <a href="" className="active">1</a>
            <a href="">2</a>

            <a href="">&raquo;</a>
        </div>);
    }
}
import React from "react";
import "./Pagination.css";

export default class PaginationComponent extends React.Component {
  render() {
    // return <Pagination onChange={this.onChange} current={this.state.current} total={20}/>;
    return (
      <div className="pagination">
        <a href="" className="active">
          1
        </a>
        <a href="">2</a>

        <a href="">&raquo;</a>
      </div>
    );
  }
}

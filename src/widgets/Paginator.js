import React from "react";

export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
  }

  onFirst = () => {
    this.props.onChangePage(1);
  };

  onPrevious = () => {
    this.props.onChangePage(this.props.currentPage - 1);
  };

  onNext = () => {
    this.props.onChangePage(this.props.currentPage + 1);
  };

  onLast = () => {
    let { pageSize, totalCount } = this.props;
    this.props.onChangePage(Math.ceil(totalCount / pageSize));
  };

  render() {
    let { currentPage, totalCount, pageSize } = this.props;
    return (
      <React.Fragment>
        <ul className="pagination">
          <li
            className={currentPage === 1 ? "disabled pager" : "pager"}
          >
            <button disabled={currentPage === 1} type="button" class="btn btn-outline-dark" onClick={this.onFirst}>First</button>
          </li>
          <li
            className={currentPage === 1 ? "disabled pager" : "pager"}
            
          >
            <button disabled={currentPage <= 1} type="button" class="btn btn-outline-dark" onClick={this.onPrevious}>Previous</button>
          </li>
          <li
            className="btn-dark pager"
            style={{ paddingRight: 10, paddingLeft: 10, borderRadius: 8 }}
          >
            {currentPage}
          </li>
          <li
            className={
              currentPage * pageSize > totalCount ? "disabled pager" : "pager"
            }
          >
            <button disabled={currentPage * pageSize > totalCount} type="button" class="btn btn-outline-dark" onClick={this.onNext}>Next</button>
          </li>
          <li
            className={
              currentPage * pageSize > totalCount ? "disabled pager" : "pager"
            }
          >
            <button disabled={currentPage * pageSize > totalCount} type="button" class="btn btn-outline-dark" onClick={this.onLast}>Last</button>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
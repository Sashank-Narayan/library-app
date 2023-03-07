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
            onClick={this.onFirst}
          >
            <button disabled={currentPage === 1}>First</button>
          </li>
          <li
            className={currentPage === 1 ? "disabled pager" : "pager"}
            onClick={this.onPrevious}
          >
            <button disabled= {currentPage === 1}>Previous</button>
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
            onClick={this.onNext}
          >
            <button disabled={currentPage * pageSize > totalCount}>Next</button>
          </li>
          <li
            className={
              currentPage * pageSize > totalCount ? "disabled pager" : "pager"
            }
            onClick={this.onLast}
          >
            <button disabled={currentPage * pageSize > totalCount}>Last</button>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
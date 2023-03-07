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
            First
          </li>
          <li
            className={currentPage === 1 ? "disabled pager" : "pager"}
            onClick={this.onPrevious}
          >
            Previous
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
            Next
          </li>
          <li
            className={
              currentPage * pageSize > totalCount ? "disabled pager" : "pager"
            }
            onClick={this.onLast}
          >
            Last
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
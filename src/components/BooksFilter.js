import React from "react";
import { BookSelector } from "./BookSelector";

export class BooksFilter extends React.Component {
  render() {
    let { query } = this.props;
    return (
      <div
        className="d-flex justify-content-between sidebar sidebar--style-4 z-depth-1-top"
        style={{ padding: "1rem" }}
      >
        <div className="col-md-2">
          <BookSelector query={query} onChangequery={this.props.onChangequery} />
        </div>
      </div>
    );
  }
}

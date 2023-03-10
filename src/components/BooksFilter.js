import React from "react";
import { BookSelector } from "./BookSelector";

export class BooksFilter extends React.Component {
  render() {
    let { query } = this.props;
    return (
      <div
        style={{ borderBottom: "1px solid black", padding: 25, width: "85vw" }}
      >
        <BookSelector query={query} onChangequery={this.props.onChangequery} />
      </div>
    );
  }
}

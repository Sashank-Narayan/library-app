import React from "react";

export class BookSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query }
  }

  clearQuery = () => {
    this.setState({ query: "" });
    this.props.onChangequery("");
  }

  render() {
    let { query } = this.state;
    return (
      <React.Fragment>
        <div className="mb-1" style={{ fontWeight: 500, fontSize: "14px" }}>
          Search
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <br/>
        <button type="button" class="btn btn-outline-primary" onClick={() => this.props.onChangequery(query)}>Search</button>
        <button type="button" class="btn btn-outline-primary" onClick={() => this.clearQuery()}>Clear</button>
      </React.Fragment>
    );
  }
}
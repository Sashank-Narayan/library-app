import React from "react";

export class BookSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query };
  }

  clearQuery = () => {
    this.setState({ query: "" });
    this.props.onChangequery("");
  };

  render() {
    let { query } = this.state;
    return (
      <React.Fragment>
        <div style={{ display: "flex" }}>
          <div>
            <input
              placeholder="Search by Book/Author name"
              type="text"
              value={query}
              style={{ width: 230 }}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </div>
          <div className="mx-2">
            <button
              type="button"
              class="btn btn-sm btn-primary"
              onClick={() => this.props.onChangequery(query)}
            >
              Search
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger"
              onClick={() => this.clearQuery()}
            >
              Clear
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

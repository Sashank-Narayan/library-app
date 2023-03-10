import React from "react";
import Paginator from "../widgets/Paginator";
import Spinner from "../widgets/Spinner";
import { BooksFilter } from "./BooksFilter";
import BookTableHeader from "./BookTableHeader";
import BookTableView from "./BookTableView";

export default class BookSearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 10,
      query: "",
      author: true,
    };
  }

  componentDidMount() {
    this.getTotalSearchCount(this.state.query);
    this.loadSearchBooks();
  }

  loadSearchBooks = () => {
    this.props.loadBooks(
      this.state.query,
      this.state.currentPage,
      this.state.pageSize,
      false
    );
  };

  loadSearchBooksByAuthor = () => {
    this.props.loadBooks(
      this.state.query,
      this.state.currentPage,
      this.state.pageSize,
      this.state.author
    );
  };

  getTotalSearchCount = (query) => {
    let { from } = this.props;
    if (from && from != "subjects") {
      this.props.getTotalCount(query);
    }
  };

  //checkPoint
  onChangequery = (query) => {
    this.setState({ query }, () => {
      this.getTotalSearchCount(query);
      this.loadSearchBooks();
      this.setState({ currentPage: 1 });
    });
  };

  onChangeCurrentPage = (page) => {
    this.setState({ currentPage: page }, this.loadSearchBooks);
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    let { pageSize, currentPage } = this.state;
    let { filteredBooks = [], totalCount, loading, from } = this.props;
    console.log(this.props.subjectName);
    return (
      <div>
        <div>
          {from && from === "subjects" && !loading && (
            <h3>{this.props.subjectName.toUpperCase()}</h3>
          )}
          {from && from != "subjects" && (
            <div>
              <div>
                {/* {!this.props.subjectQuery && <button type="button" class="btn btn-outline-primary" onClick={this.loadSearchBooksByAuthor}>Filter By Author</button>} */}
                <BooksFilter
                  query={this.state.query}
                  onChangequery={this.onChangequery}
                  page={currentPage}
                  pageSize={pageSize}
                />
              </div>
            </div>
          )}
          {filteredBooks.length > 0 && (
            <div
              style={{
                height: "88vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                {loading ? (
                  <div
                    style={{
                      height: "95vh",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <Spinner />
                    </div>
                  </div>
                ) : (
                  <table className="table">
                    <BookTableHeader />
                    <tbody>
                      {filteredBooks.map((book) => (
                        <BookTableView book={book} />
                      ))}
                    </tbody>
                  </table>
                )}
                {from && from != "subjects" && (
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <Paginator
                        totalCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onChangePage={this.onChangeCurrentPage}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {filteredBooks.length === 0 && !loading && (
            <div
              style={{ height: "77vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h5>No Books matches the filter</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
// }

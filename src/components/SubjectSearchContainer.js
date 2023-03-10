import React from "react";
import LibraryService from "../service/LibraryService";
import BookSearchView from "./BookSearchView";
import SubjectList from "./SubjectList";

export default class SubjectSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: [],
      totalCount: 0,
      pageSize: 10,
      query: this.props.location.pathname.split("/")[1],
    };
  }

  loadBooks = (pageSize = 10) => {
    this.setState({ loading: true });
    let { query = "" } = this.state;
    LibraryService.fetchBooksBySubject(query, pageSize)
      .then((books) => {
        console.log(books);
        if (books) {
          this.setState({
            filteredBooks: books,
            loading: false,
          });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    let { filteredBooks, totalCount, loading } = this.state;

    return (
      <>
        <div style={{ display: "flex", height: "100vh" }}>
          <div className="p-2" style={{ borderRight: "1px solid black" }}>
            <h5 style={{ textDecoration: "underline" }}>
              {!this.props.subjectQuery && "Trending Subjects"}
            </h5>
            {!this.props.subjectQuery && <SubjectList />}
          </div>
          <div className="p-2">
            <BookSearchView
              totalCount={totalCount}
              filteredBooks={filteredBooks}
              loading={loading}
              getTotalCount={this.getTotalCountOfBooks}
              loadBooks={this.loadBooks}
              subjectQuery={true}
              subjectName={this.state.query}
              from="subjects"
            />
          </div>
        </div>
      </>
    );
  }
}

import React from "react";
import Paginator from "../widgets/Paginator";
import Spinner from "../widgets/Spinner";
import { BooksFilter } from "./BooksFilter";
import BookTableHeader from "./BookTableHeader";
import BookTableView from "./BookTableView";
import SubjectList from "./SubjectList";

export default class BookSearchView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currentPage: 1,
            pageSize: 10,
            query : "",
            author: true,
        }
    }

    componentDidMount(){
        this.getTotalSearchCount(this.state.query)
        this.loadSearchBooks()
    }

    loadSearchBooks = () => {
        this.props.loadBooks(this.state.query, this.state.currentPage, this.state.pageSize, false)
    }

    loadSearchBooksByAuthor = () => {
      this.props.loadBooks(this.state.query, this.state.currentPage, this.state.pageSize, this.state.author)
    }

    getTotalSearchCount = (query) => {
        this.props.getTotalCount(query)
    }

    //checkPoint
    onChangequery = (query) => {
        this.setState({ query }, () => {
          this.getTotalSearchCount(query);
          this.loadSearchBooks();
          this.setState({ currentPage: 1 })
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

    render(){

        let { pageSize, currentPage } = this.state;
        let { filteredBooks = [], totalCount, loading } = this.props;
        let subjectName = window.location.pathname.split('/')[1].toUpperCase()


        return(
                  <div>
                    <div>
                        <div className="col-md-5">
                            <h3>{!this.props.subjectQuery ? "Trending Subjects" : subjectName}</h3>
                            {!this.props.subjectQuery && 
                                <SubjectList/>
                            }
                        </div>
                      <div className="row">
                        
                        <div className="col-md-12 mt-3 pb-3">
                          {!this.props.subjectQuery && <button onClick={this.loadSearchBooksByAuthor}>Filter By Author</button>}
                          <BooksFilter
                            query={this.state.query}
                            onChangequery={this.onChangequery}
                            page={currentPage}
                            pageSize={pageSize}
                          />
                        </div>
                      </div>
                        
                      {filteredBooks.length > 0 && (
                        <div>
                          {loading ? (
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ width: "100%" }}
                            >
                              <Spinner />
                            </div>
                          ) : (
                            <table className="table">
                              <BookTableHeader />
                              <tbody>
                                {filteredBooks.map((book) => (
                                  <BookTableView
                                    book={book}
                                  />
                                ))}
                              </tbody>
                            </table>
                          )}
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
                            {/* {pageSize < totalCount && pageSize > 20 && (
                              <div>
                                <button
                                  className="btn btn-primary btn-sm"
                                  onClick={this.scrollToTop}
                                >
                                  Move to top
                                </button>
                              </div>
                            )} */}
                          </div>
                        </div>
                      )}
                      {filteredBooks.length === 0 && !loading && (
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="card .z-depth-1-top">
                            <h5>No Books matches the filter</h5>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
            }
        }
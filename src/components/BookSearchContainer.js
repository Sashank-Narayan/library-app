import React from "react";
import LibraryService from "../service/LibraryService";
import BookSearchView from "./BookSearchView";

export default class BookSearchContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            filteredBooks : [],
            totalCount: 0
        }
    }

    getTotalCountOfBooks = (query) => {
        LibraryService.getTotalCount(query)
            .then((count) => {
                this.setState({
                    totalCount : count
                })
            })
    }

    loadBooks = (query, page, pageSize = 10, author) => {
        this.setState({ loading: true });
        LibraryService.fetchBooks(query, page, pageSize, author)
          .then((books) => {
            console.log(books)
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

    render(){
        let {filteredBooks, totalCount, loading} = this.state
        return(
            <>
                <BookSearchView
                    totalCount={totalCount}
                    filteredBooks={filteredBooks}
                    loading={loading}
                    getTotalCount={this.getTotalCountOfBooks}
                    loadBooks={this.loadBooks}
                />
            </>
        )
    }
}
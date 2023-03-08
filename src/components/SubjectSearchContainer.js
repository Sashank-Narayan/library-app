import React from "react";
import LibraryService from "../service/LibraryService";
import BookSearchView from "./BookSearchView";

export default class SubjectSearchContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            filteredBooks : [],
            totalCount: 0,
            pageSize : 10,
            query: this.props.location.pathname.split('/')[1]
        }
    }

    getTotalCountOfBooks = () => {
        LibraryService.getTotalCountBySubject(this.state.query)
            .then((count) => {
                console.log(count)
                this.setState({
                    totalCount : count
                })
            })
    }

    loadBooks = (pageSize = 10) => {
        this.setState({ loading: true });
        LibraryService.fetchBooksBySubject(this.state.query, pageSize)
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
                subjectQuery = {true}
                subjectName = {this.state.query} 
            />
            </>
        )
    }
}
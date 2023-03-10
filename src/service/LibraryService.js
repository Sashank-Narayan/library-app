import React from "react";
import { API_BASE_URL } from "../Constant";
import http from "./API";

export default class LibraryService extends React.Component {
  static getTotalCount(query) {
    return http
      .get(API_BASE_URL + `/search.json?q=${query}`)
      .then((response) => {
        if (response.success) {
          return response.count;
        } else {
          throw new Error();
        }
      });
  }

  static fetchBooks(query, page, pageSize, author) {
    return http
      .get(
        API_BASE_URL +
          `/search.json?` +
          (!author ? `q=${query}` : `author=${query}`) +
          `&page=${page}&limit=${pageSize}`
      )
      .then((response) => {
        console.log(response.books);
        if (response.success) {
          return response.books;
        } else {
          throw new Error();
        }
      });
  }

  static getTotalCountBySubject(query) {
    return http.get(API_BASE_URL + `/subjects/${query}.json`).then((res) => {
      console.log(res.data);
      return res.data.work_count;
    });
  }

  static fetchBooksBySubject(query, pageSize) {
    return http
      .get(API_BASE_URL + `/subjects/${query}.json?limit=${pageSize}`)
      .then((response) => {
        console.log(response.books);
        if (response.success) {
          return response.books;
        } else {
          throw new Error();
        }
      });
  }
}

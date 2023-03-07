import React from "react";

export default function BookTableView({ book }){
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.firstPublishedDate}</td>
      <td>{book.lastPublishedDate}</td>
    </tr>
  );
};

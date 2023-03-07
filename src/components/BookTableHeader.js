import React from "react";

export default function BookTableHeader({ from }){
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Book Name</th>
        <th scope="col">Author</th>
        <th scope="col">First Publish Date</th>
        <th scope="col">Last Publish Date</th>
      </tr>
    </thead>
  );
};
import React from "react";

export default function BookTableHeader({ from }){
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Title And Sub Title</th>
        <th scope="col">Author</th>
        <th scope="col">First Publish Year</th>
        <th scope="col">Latest Publish Year</th>
      </tr>
    </thead>
  );
};
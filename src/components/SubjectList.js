import React from "react";

export default function SubjectList(){
    return(
        <div className="d-grid gap-2 d-md-flex">
          <a href="/" class="btn btn-block btn-secondary btn-lg mb-2" role="button" aria-pressed="true">All</a>
          <a href="/science" class="btn btn-secondary btn-lg mb-2" role="button" aria-pressed="true">Science</a>
          <a href="/javascript" class="btn btn-secondary btn-lg mb-2" role="button" aria-pressed="true">Javascript</a>
          <a href="/programming" class="btn btn-secondary btn-lg mb-2" role="button" aria-pressed="true">Programming</a>
          <a href="/finance" class="btn btn-secondary btn-lg mb-2" role="button" aria-pressed="true">Finance</a>
          <a href="/horror" class="btn btn-secondary btn-lg mb-2" role="button" aria-pressed="true">Horror</a>
      </div>
    )
}
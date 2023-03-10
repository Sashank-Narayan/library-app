import React from "react";

export default function SubjectList() {
  return (
    <div style={{ textAlign: "initial" }}>
      <div className="my-1">
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href="/science"
          role="button"
          aria-pressed="true"
        >
          Science
        </a>
      </div>
      <div className="my-1">
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href="/javascript"
          role="button"
          aria-pressed="true"
        >
          Javascript
        </a>
      </div>
      <div className="my-1">
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href="/programming"
          role="button"
          aria-pressed="true"
        >
          Programming
        </a>
      </div>
      <div className="my-1">
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href="/finance"
          role="button"
          aria-pressed="true"
        >
          Finance
        </a>
      </div>
      <div className="my-1">
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href="/horror"
          role="button"
          aria-pressed="true"
        >
          Horror
        </a>
      </div>
    </div>
  );
}

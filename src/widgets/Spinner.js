import React from "react";

export default function Spinner(props) {
  return (
    <div
      className="spinner-border"
      style={{ position: "fixed", top: "30%", zIndex: "1031", left: "55%" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

import React from "react";

export default function Header({ children }) {
  return (
    <h1 style={{ textAlign: "center", margin: "50px 0px" }}>{children}</h1>
  );
}

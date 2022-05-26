import React from "react";
import css from "./Warning.module.css";

export default function Warning({ children }) {
  return <span className={css.text}>{children}</span>;
}

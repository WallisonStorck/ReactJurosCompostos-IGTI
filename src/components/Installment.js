import React from "react";
import css from "./Installment.module.css";

export default function Installment() {
  return (
    <div className={css.box}>
      <span className={css.number}>1</span>
      <div className={css.information}>
        <span>R$ 5.947,20</span>
        <span>R$ 47,20</span>
        <span>0,80%</span>
      </div>
    </div>
  );
}

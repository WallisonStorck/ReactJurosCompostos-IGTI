import React from "react";
import css from "./Installment.module.css";

export default function Installment({
  id,
  accumulatedAmount,
  installment,
  rate,
}) {
  return (
    <div className={css.box}>
      <span className={css.number}>{id}</span>
      <div className={css.information}>
        <span>{`R$ ${accumulatedAmount}`}</span>
        <span>{`+R$ ${installment}`}</span>
        <span>{`${rate}%`}</span>
      </div>
    </div>
  );
}

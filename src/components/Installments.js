import React from "react";
import Installment from "./Installment";
import css from "./Installments.module.css";

export default function Installments() {
  return (
    <div className={css.boxInstallments}>
      <Installment />
    </div>
  );
}

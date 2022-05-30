import React from "react";
import Installment from "./Installment";
import css from "./Installments.module.css";

export default function Installments({ installments }) {
  return (
    <div className={css.boxInstallments}>
      {installments.map(({ id, accumulatedAmount, installment, rate }) => {
        return (
          <Installment
            id={id}
            accumulatedAmount={accumulatedAmount}
            installment={installment}
            rate={rate}
          />
        );
      })}
    </div>
  );
}

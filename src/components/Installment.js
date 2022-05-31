import React from "react";
import { formatNumber, formatPercentage } from "./helpers/Formatters";
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
        <span
          className={installment >= 0 ? css.positiveNumber : css.negativeNumber}
        >
          {formatNumber(accumulatedAmount)}
        </span>
        <span
          className={installment >= 0 ? css.positiveNumber : css.negativeNumber}
        >
          {formatNumber(installment)}
        </span>
        <span
          className={
            installment >= 0 ? css.positivePercent : css.negativePercent
          }
        >
          {formatPercentage(rate)}
        </span>
      </div>
    </div>
  );
}

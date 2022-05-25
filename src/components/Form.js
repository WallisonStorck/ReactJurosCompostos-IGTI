import React from "react";
import css from "./Form.module.css";

export default function Form() {
  return (
    <div className={css.flexRow}>
      <label htmlFor="initialCapital" className={css.input}>
        Capital Inicial:
        <input type="number" id="initialCapital" step={100} />
      </label>

      <label htmlFor="" className={css.input}>
        Taxa de juros mensal:
        <input type="number" step={0.5} />
      </label>

      <label htmlFor="" className={css.input}>
        Período (meses):
        <input type="number" />
      </label>
    </div>
  );
}

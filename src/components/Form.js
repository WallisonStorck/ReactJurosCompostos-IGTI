import React from "react";
import css from "./Form.module.css";

export default function Form({
  initialCapital,
  monthlyInterestRate,
  timeCourse,
  handleChangeInput,
}) {
  function handleChange(event) {
    const value = event.target.value;
    const input = event.target.id;

    handleChangeInput(value, input);
  }

  return (
    <div className={css.flexRow}>
      <label htmlFor="" className={css.input}>
        Capital Inicial:
        <input
          id="initialCapital"
          type="number"
          value={initialCapital}
          step={100}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="" className={css.input}>
        Taxa de juros mensal:
        <input
          id="monthlyInterestRate"
          type="number"
          value={monthlyInterestRate}
          step={0.5}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="" className={css.input}>
        Período (meses):
        <input
          id="timeCourse"
          type="number"
          value={timeCourse}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

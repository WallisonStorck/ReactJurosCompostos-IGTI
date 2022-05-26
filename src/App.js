import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Installments from "./components/Installments";
import Warning from "./components/Warning";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [timeCourse, setTimeCourse] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChangeInput(value, input) {
    if (input === "initialCapital") {
      if (value < 0 || value > 100000) {
        setErrorMessage("O capital inicial deve ser entre 0 e 100.000!");
        return;
      }
      setInitialCapital(value);
      setErrorMessage("");
      return;
    }
    if (input === "monthlyInterestRate") {
      if (value < -12 || value > 12) {
        setErrorMessage("A taxa de juros deve variar entre -12 e 12!");
        return;
      }
      setMonthlyInterestRate(value);
      setErrorMessage("");
      return;
    }
    if (input === "timeCourse") {
      if (value < 1 || value > 36) {
        setErrorMessage("As parcelas devem variar entre 1 e 36!");
        return;
      }
      setTimeCourse(value);
      setErrorMessage("");
      return;
    }
  }

  return (
    <div style={{ padding: "0px 15px" }}>
      <Header>React - Juros Compostos</Header>
      <Form
        initialCapital={initialCapital}
        monthlyInterestRate={monthlyInterestRate}
        timeCourse={timeCourse}
        handleChangeInput={handleChangeInput}
      />
      <Warning>{errorMessage}</Warning>
      <Installments />
    </div>
  );
}

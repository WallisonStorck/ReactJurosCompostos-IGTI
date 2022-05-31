import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Installments from "./components/Installments";
import Warning from "./components/Warning";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(5900);
  const [monthlyRate, setMonthlyRate] = useState(0.8);
  const [timeCourse, setTimeCourse] = useState(12);
  const [errorMessage, setErrorMessage] = useState("");

  const [installments, setInstallments] = useState([]);

  const CONST = {
    MIN_INITIAL_CAPITAL: 0,
    MAX_INITIAL_CAPITAL: 100000,
    MIN_MONTHLY_RATE: -12,
    MAX_MONTHLY_RATE: 12,
    MIN_TIME_COUSE: 1,
    MAX_TIME_COUSE: 36,
  };

  function handleChangeInput(value, input) {
    if (input === "initialCapital") {
      if (
        value < CONST.MIN_INITIAL_CAPITAL ||
        value > CONST.MAX_INITIAL_CAPITAL
      ) {
        setErrorMessage(
          `O capital inicial deve ser entre ${CONST.MIN_INITIAL_CAPITAL} e ${CONST.MAX_INITIAL_CAPITAL}!`
        );
        return;
      }
      setInitialCapital(value);
      setErrorMessage("");
      return;
    }
    if (input === "monthlyRate") {
      if (value < CONST.MIN_MONTHLY_RATE || value > CONST.MAX_MONTHLY_RATE) {
        setErrorMessage(
          `A taxa de juros deve variar entre ${CONST.MIN_MONTHLY_RATE} e ${CONST.MAX_MONTHLY_RATE}!`
        );
        return;
      }
      setMonthlyRate(value);
      setErrorMessage("");
      return;
    }
    if (input === "timeCourse") {
      if (value < CONST.MIN_TIME_COUSE || value > CONST.MAX_TIME_COUSE) {
        setErrorMessage(
          `As parcelas devem variar entre ${CONST.MIN_TIME_COUSE} e ${CONST.MAX_TIME_COUSE}!`
        );
        return;
      }
      setTimeCourse(value);
      setErrorMessage("");
      return;
    }
  }

  useEffect(() => {
    const arrayInstallment = [];

    for (let i = 1; i <= timeCourse; i++) {
      const installmentNumber = parseInt(i);

      // Taxa acumulada atual
      const currentRate = parseFloat(
        (monthlyRate * installmentNumber).toFixed(2)
      );

      // Parcela atual
      const currentInstallment = (initialCapital * currentRate) / 100;

      // Montante atual
      const accumulatedAmount = initialCapital + currentInstallment;

      const objectInstallment = {
        id: i,
        accumulatedAmount,
        installment: currentInstallment,
        rate: currentRate,
      };

      arrayInstallment.push(objectInstallment);
    }
    setInstallments(arrayInstallment);
  }, [initialCapital, monthlyRate, timeCourse]);

  return (
    <div style={{ padding: "0px 15px" }}>
      <Header>React - Juros Compostos</Header>
      <Form
        initialCapital={initialCapital}
        monthlyRate={monthlyRate}
        timeCourse={timeCourse}
        handleChangeInput={handleChangeInput}
      />
      <Warning>{errorMessage}</Warning>
      <Installments installments={installments} />
    </div>
  );
}

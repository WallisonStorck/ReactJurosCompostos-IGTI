import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Installment from "./components/Installment";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [timeCourse, setTimeCourse] = useState(0);

  return (
    <div style={{ padding: "0px 15px" }}>
      <Header>React - Juros Compostos</Header>
      <Form />
      <Installment />
    </div>
  );
}

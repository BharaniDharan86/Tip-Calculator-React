import { useState } from "react";
import BillForm from "./BillForm";
import BillResult from "./BillResult";

function Calculator() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(5);

  function handleReset() {
    setBill(0);
    setTip(5);
    setPeople(1);
  }

  return (
    <div className="calculator">
      <BillForm
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        setTip={setTip}
        tip={tip}
      />
      <BillResult
        tip={tip}
        bill={bill}
        people={people}
        handleReset={handleReset}
      />
    </div>
  );
}

export default Calculator;

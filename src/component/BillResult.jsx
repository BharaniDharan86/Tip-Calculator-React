/* eslint-disable react/prop-types */
function BillResult({ bill, people, tip, handleReset }) {
  const tipAmount = bill * (tip / 100);

  const perHead = people ? (Number(bill) + tipAmount) / people : 0;

  return (
    <div className="bill-result-outer">
      <div className="bill-result">
        <div className="inner">
          <div>
            <div className="set">
              <h3>
                Tip Amount <br /> <span>/person</span>
              </h3>
              <p>$ {tipAmount.toFixed(2)}</p>
            </div>
            <div className="set">
              <h3>
                Total <br /> <span>/person</span>
              </h3>
              <p>${perHead.toFixed(2)}</p>
            </div>
          </div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default BillResult;

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function BillForm({ bill, setBill, people, setPeople, setTip, tip }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Bill</label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <label htmlFor="">Select %</label>
        <br />

        <div>
          {[2, 5, 10, 12, 15].map((tips) => {
            return (
              <Button onClick={setTip} tip={tip}>
                {tips}
              </Button>
            );
          })}
        </div>

        <div>
          <label htmlFor="">Number of people</label>
          <input
            type="text"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

function Button({ children, onClick, tip }) {
  const isChosen = children === tip;
  console.log(isChosen);
  return (
    <button
      className={`${isChosen ? "active" : ""}`}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}%
    </button>
  );
}

export default BillForm;

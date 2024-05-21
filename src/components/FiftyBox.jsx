import BoxHeader from "./BoxHeader";
import { useState } from "react";
import ListItem from "./ListItem";
const FiftyBox = ({ fifty, newIncome }) => {
  const [fiftyList, setFiftyList] = useState([]);

  const fiftyTotal = fiftyList.reduce((acc, item) => {
    const parsedValue = parseInt(item.amount);
    if (!isNaN(parsedValue)) {
      return acc + parsedValue;
    }
    return acc;
  }, 0);

  const handleFiftyListChange = (e) => {
    e.preventDefault();
    const name = e.target.form.elements.name.value;
    const value = e.target.form.elements.amount.value;

    const newValue = {
      name: name,
      amount: value,
      id: Math.random(),
    };
    setFiftyList([...fiftyList, newValue]);
    e.target.form.elements.name.value = "";
    e.target.form.elements.amount.value = "";

    document.getElementById("name-box-needs").focus();
  };
  const handleDeleteItem = (id) => {
    setFiftyList(fiftyList.filter((item) => item.id !== id));
  };
  return (
    <div className="flex rounded-3xl flex-col text-2xl border-2 w-1/2 my-5 p-3">
      <BoxHeader
        name="Needs"
        percentage={((100 * fiftyTotal) / fifty).toFixed(2)}
        dollarAmount={fifty}
      />
      {fiftyList.length === 0 ? (
        <div>No items to display</div>
      ) : (
        <ul className="w-full justify-center">
          {fiftyList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.amount}
              mainbg="bg-red-100"
              bg="bg-red-500"
              hover="bg-red-700"
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
      )}
      <form className="flex flex-col items-center border-2 rounded-2xl">
        <label>
          <input
            id="name-box-needs"
            className="border-2 rounded-lg m-2 text-center"
            type="text"
            name="name"
            placeholder="Bill name"
          />
        </label>
        <label>
          <input
            className="border-2 rounded-lg m-2 text-center"
            type="number"
            name="amount"
            placeholder="Bill amount"
          />
        </label>
        <button
          className="border-2 bg-red-200 hover:bg-red-500 border-grey-200 shadow-md rounded-lg text-lg w-12 h-auto font-bold"
          type="button"
          onClick={handleFiftyListChange}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FiftyBox;

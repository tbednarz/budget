import BoxHeader from "./BoxHeader";
import { useState } from "react";
import ListItem from "./ListItem";
const FiftyBox = ({ fifty }) => {
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
    <div className="flex flex-col rounded-3xl text-2xl border-2 w-full md:w-1/2 my-5 p-3">
      <BoxHeader
        name="Needs"
        percentage={"Left over: " + `${fifty - fiftyTotal}`}
        dollarAmount={fifty}
      />
      {fifty.length === 0 ? (
        <div className="text-center">No items to display</div>
      ) : (
        <ul className="w-full">
          {fiftyList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.amount}
              mainbg="bg-red-100"
              bg="bg-red-400"
              hover="bg-red-700"
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
      )}
      <form className="flex flex-col items-center border-2 rounded-2xl mt-3">
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
          className="border-2 bg-gray-200 hover:bg-gray-300 border-grey-200 shadow-md rounded-xl p-2 text-shadow text-lg w-20 mt-2 mb-2 font-bold"
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

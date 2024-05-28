import BoxHeader from "./BoxHeader";
import { useState } from "react";
import ListItem from "./ListItem";
const ThirtyBox = ({ thirty }) => {
  const [thirtyList, setThirtyList] = useState([]);

  const thirtyTotal = thirtyList.reduce((acc, item) => {
    const parsedValue = parseInt(item.amount);
    if (!isNaN(parsedValue)) {
      return acc + parsedValue;
    }
    return acc;
  }, 0);

  const handleThirtyListChange = (e) => {
    e.preventDefault();
    const name = e.target.form.elements.name.value;
    const value = e.target.form.elements.amount.value;

    const newValue = {
      name: name,
      amount: value,
      id: Math.random(),
    };
    setThirtyList([...thirtyList, newValue]);
    e.target.form.elements.name.value = "";
    e.target.form.elements.amount.value = "";

    document.getElementById("name-box-wants").focus();
  };

  const handleDeleteItem = (id) => {
    setThirtyList(thirtyList.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col rounded-3xl text-2xl border-2 w-full md:w-1/2 my-5 p-3">
      <BoxHeader
        name="Wants"
        percentage={"Left over: " + `${thirty - thirtyTotal}`}
        dollarAmount={thirty}
      />
      {thirty.length === 0 ? (
        <div className="text-center">No items to display</div>
      ) : (
        <ul className="w-full">
          {thirtyList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.amount}
              mainbg="bg-blue-100"
              bg="bg-blue-500"
              hover="bg-blue-700"
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
      )}
      <form className="flex flex-col items-center border-2 rounded-2xl mt-3">
        <label>
          <input
            id="name-box-wants"
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
          className="border-2 bg-blue-200 hover:bg-blue-500 border-grey-200 shadow-md rounded-lg text-lg w-12 h-auto font-bold mt-2"
          type="button"
          onClick={handleThirtyListChange}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ThirtyBox;

import BoxHeader from "./BoxHeader";
import { useState } from "react";
import ListItem from "./ListItem";
const TwentyBox = ({ twenty }) => {
  const [twentyList, setTwentyList] = useState([]);

  const twentyTotal = twentyList.reduce((acc, item) => {
    const parsedValue = parseInt(item.amount);
    if (!isNaN(parsedValue)) {
      return acc + parsedValue;
    }
    return acc;
  }, 0);

  const handleTwentyListChange = (e) => {
    e.preventDefault();
    const name = e.target.form.elements.name.value;
    const value = e.target.form.elements.amount.value;

    const newValue = {
      name: name,
      amount: value,
      id: Math.random(),
    };
    setTwentyList([...twentyList, newValue]);
    e.target.form.elements.name.value = "";
    e.target.form.elements.amount.value = "";

    document.getElementById("name-box-saving").focus();
  };

  const handleDeleteItem = (id) => {
    setTwentyList(twentyList.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col rounded-3xl text-2xl border-2 w-full md:w-1/2 my-5 p-3">
      <BoxHeader
        name="Saving"
        percentage={"Left over: " + `${twenty - twentyTotal}`}
        dollarAmount={twenty}
      />
      {twenty.length === 0 ? (
        <div className="text-center">No items to display</div>
      ) : (
        <ul className="w-full">
          {twentyList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.amount}
              mainbg="bg-green-100"
              bg="bg-green-500"
              hover="bg-green-700"
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
      )}
      <form className="flex flex-col items-center border-2 rounded-2xl mt-3">
        <label>
          <input
            id="name-box-saving"
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
          className="border-2 bg-green-200 hover:bg-green-500 border-grey-200 shadow-md rounded-lg text-lg w-12 h-auto font-bold mt-2"
          type="button"
          onClick={handleTwentyListChange}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TwentyBox;

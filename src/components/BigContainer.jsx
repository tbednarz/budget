import { useState } from "react";
import AddIncomeBox from "./AddIncomeBox";
import FiftyBox from "./FiftyBox";
import ThirtyBox from "./ThirtyBox";
import TwentyBox from "./TwentyBox";
const BigContainer = () => {
  const [newIncome, setNewIncome] = useState("");

  const fiftyPercent = (newIncome / 2).toFixed(2);
  const thirtyPercent = (newIncome * 0.3).toFixed(2);
  const twentyPercent = (newIncome * 0.2).toFixed(2);

  const handleSubmitIncome = (e) => {
    e.preventDefault();
    if (!newIncome) return;
    //addIncome Function
    setNewIncome("");
  };

  return (
    <div className="flex flex-col items-center p-1 w-full text-center ">
      <ol className="list-disc text-left">
        <li>make it not display NaN when income is empty</li>
        <li>clean up ui more, fiddle with font sizes and box sizes</li>
        <li>add button to save results to pdf or to a table?</li>
      </ol>
      <AddIncomeBox
        newIncome={newIncome}
        setNewIncome={setNewIncome}
        handleSubmitIncome={handleSubmitIncome}
      />
      <FiftyBox fifty={fiftyPercent} newIncome={newIncome} />
      <ThirtyBox thirty={thirtyPercent} />
      <TwentyBox twenty={twentyPercent} />
    </div>
  );
};

export default BigContainer;

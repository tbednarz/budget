const BoxHeader = ({ name, percentage, dollarAmount }) => {
  return (
    <div className="flex flex-row justify-around">
      <header className="border-b-2 font-bold">{name}</header>
      <div className="">{dollarAmount}</div>
      <div className={percentage < 0 ? "text-red-500" : "text-black"}>
        {percentage}
      </div>
    </div>
  );
};

export default BoxHeader;

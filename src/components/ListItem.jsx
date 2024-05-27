const ListItem = ({ key, id, name, value, mainbg, bg, hover, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      key={key}
      id={key}
      className={`flex flex-col justify-evenly  md:flex-row border-2 rounded-2xl ${mainbg} w-full md:w-auto m-3 p-1 font-sans font-bold shadow-lg`}
    >
      <div className="flex flex-col  md:flex-row w-full md:w-auto">
        <li className="bg-gray-300 p-2 rounded-xl mb-2 md:mb-0 md:mr-2 md:px-4 text-center">
          {name}
        </li>
        <li
          className={`${bg} hover:${hover} text-white font-bold py-2 px-4 rounded-full shadow-md mb-2 md:mb-0 md:mr-2`}
        >
          {value}
        </li>
        <button
          className={`${bg} hover:${hover} text-white font-bold py-2 px-4 rounded-full shadow-md`}
          type="button"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;

const ListItem = ({key, id,  name, value, mainbg, bg, hover, onDelete}) => {

  const handleDelete = () => {
    onDelete(id)
  }
  
  return (
    <div key={key} id={key} className={`flex justify-around border-2 rounded-2xl ${mainbg}  w-auto m-3 p-1 font-sans font-bold shadow-lg`}>
              <li className="bg-gray-300 p-2 rounded-xl px-10" >{name}</li>
                <li className={`${bg} hover:${hover} text-white font-bold py-2 px-4 rounded-full shadow-md`}>{value}</li>
                <button className={`${bg} hover:${hover} text-white font-bold py-2 px-4 rounded-full shadow-md`} type="button" onClick={handleDelete}>delete</button>
            </div>
  )
}

export default ListItem
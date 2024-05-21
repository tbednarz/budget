const AddIncomeBox = ({newIncome, setNewIncome, handleSubmitIncome}) => {

  return (
    <form className="flex flex-col p-1 w-auto " onSubmit={handleSubmitIncome}>
        <label>Add Income here</label>
        <input className="border-2 rounded-lg" type="number"  
         value={newIncome} 
         onChange={(e)=> setNewIncome(e.target.value)}/
         >
        <button type="button"  className="rounded-lg border-2 border-gray-200 text-gray-600 bg-gray-200 hover:bg-gray-300" >Add Income</button>
    </form>
  )
}

export default AddIncomeBox
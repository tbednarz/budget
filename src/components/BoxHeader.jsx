const BoxHeader = ({name, percentage="100%", dollarAmount }) => {
  return (
    <div className='flex flex-row justify-around'>
        <header className="border-b-2 font-bold">{name}</header>
        <div className="text-black">{dollarAmount}</div>
    <div className>{percentage}</div>
</div>
  )
}

export default BoxHeader
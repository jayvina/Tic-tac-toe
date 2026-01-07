import React, { use } from 'react';
import {SquarePen} from 'lucide-react'
import {useState} from 'react';

function Players({initialName, symbol}) {
  const [playername, setPlayername] = useState(initialName);
  const [isediting, setIsediting] = useState(false);

  function handleEditClick(){
    setIsediting((editing) => !editing );
  }

  function handleChange(event){
    setPlayername(event.target.value)
  }

  let editablePlayerName = playername;

  if(isediting){
    editablePlayerName = <input type="text" className='w-32 sm:w-40 px-2 py-1 rounded text-neutral-900' required value={playername} onChange={handleChange}/>
  }

  return (
    <>
      <li>
        <div className=" flex items-center justify-between gap-8 flex-wrap sm:flex-nowrap">
          <span className='px-4 py-1 bg-yellow-200 text-neutral-950 rounded text-sm sm:text-base'>{editablePlayerName}</span>
          <span className=" font-bold text-lg">{symbol}</span>
          <button onClick={handleEditClick} className='p-2 rounded cursor-pointer active:scale-95'> {isediting ? 'Save' : <SquarePen className="w-4 h-4" />} </button>
        </div>
      </li>
    </> 
  )
}

export default Players;

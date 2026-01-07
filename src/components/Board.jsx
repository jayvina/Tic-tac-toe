import React from 'react'
import { useState, useEffect } from 'react'

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);

  function calculateWinner(board){
    const winningCombinations = [
      [0,1,2],  
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],  
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];  
    
    for(let combination of winningCombinations){
      const [a,b,c] = combination;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index){
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXturn ? 'X' : '0'; 
    setBoard(newBoard);
    setIsXturn(!isXturn);
  }

  // Reset the board after 5 seconds if there's a winner
  useEffect(() => {
    if (!winner && isDraw) return;

    const timer = setTimeout(() => {
      setBoard(Array(9).fill(null));
      setIsXturn(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [winner, isDraw]);

  return (
    <>
      <div className="w-full flex justify-center px-4 mt-4">
        <div className="w-full max-w-[300px] sm:max-w-[360px]">
          <p className=' text-center
        text-sm sm:text-base md:text-lg
        text-yellow-200
        tracking-wide
        mt-6'>
            {winner && `Winner is ${winner} (resetting in 5s)`}
            {!winner && isDraw && `It's a Draw (resetting in 5s)`}
            {!winner && !isDraw && `Next Player is ${isXturn ? 'X' : '0'}`}
          </p>

          <div className=" mt-4
        grid grid-cols-3
        gap-2 sm:gap-3 "> 
            {[...Array(9)].map((_,index) => (
              <button
                key={index}
                className=' className="
              aspect-square
              w-full

              bg-yellow-200
              text-neutral-900

              flex items-center justify-center

              text-3xl sm:text-4xl md:text-5xl
              font-extrabold

              rounded-xl
              shadow-sm

              active:scale-95
              transition-transform

              disabled:opacity-60'
                onClick={() => handleClick(index)}
                disabled={!!board[index] || !!winner || isDraw} 
              >
                {board[index]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Board

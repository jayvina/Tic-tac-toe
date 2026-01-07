import React from 'react'
import './App.css'
import Players from './components/Players'
import Board from './components/Board'
import Header from './components/Header'

function App() {
  return (
    <div id="container" className="min-h-screen flex flex-col">
      <Header />
      <div className=" bg-neutral-900 mt-4 px-4 py-6 sm:px-6 sm:py-8 w-full max-w-full lg:max-w-[600px] mx-auto rounded-lg flex flex-col
    items-center
    gap-1">

        <ol className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-yellow-200 font-bold text-sm sm:text-base">
          <Players initialName="Player 1" symbol="X" />
          <Players initialName="Player 2" symbol="O" />
        </ol>

        <Board />
      </div>
    </div>
  )
}

export default App

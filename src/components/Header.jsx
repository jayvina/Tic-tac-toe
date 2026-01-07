import React from 'react'
import logo from '../assets/tic-tac-toe.png';

function Header() {
  return (
    <>
      <header className="w-full flex flex-col items-center pt-5 sm:pt-6 ">
        <img
          className="h-12 sm:h-14 md:h-16 mb-3 sm:mb-4"
          src={logo}
          alt="logo"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide sm:tracking-wider font-extrabold text-neutral-900 text-center">
          Tic-Tac-Toe
        </h1>
      </header>
    </>
  )
}

export default Header

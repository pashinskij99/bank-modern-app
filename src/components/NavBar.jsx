import React, { useState } from 'react'
import clsx from 'clsx'
import { navLinks } from '../constants'
import { close, logo, menu } from '../assets'

const NavBar = () => {
  const [first, setfirst] = useState(null)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={clsx('font-poppins font-normal cursor-pointer text-[16px] text-white', index === navLinks.length - 1 ? 'mr-0' : 'mr-10')}>
             <a href={`#${nav.id}`}>
               {nav.title}
             </a>
           </li>
        ))}
      </ul>
          <div className='text-white'>text</div>
      <div className='sm:hidden flex'>
          <img src={close.src} alt=""/>
      </div>
    </nav>
  )
}

export default NavBar
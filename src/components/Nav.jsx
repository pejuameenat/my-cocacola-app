import { useEffect, useState } from 'react'
import img1 from '../assets/the-coca-cola-company-logo-0.svg'
import img2 from '../assets/globe.png'
import search from '../assets/loupe.png'
import menu from '../assets/menu.png'
import access from '../assets/accessibility.jpg'
import { navLists } from '../data'
// import DropDowns from './DropDowns'
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const isNavOpen = () => {
    if (window.innerWidth < 992) {
      setIsOpen((prevOpen) => !prevOpen)
    }
  }

  function click(e) {
    if (e.target.tagName === 'A') e.preventDefault()
  }

  return (
    <div className="sticky top-0 z-20 px-6 py-2 bg-white flex flex-col gap-6 align-items border-b border-black lg:flex-row lg:py-0">
      <div className="w-full flex justify-between lg:w-1/5 div">
        <img src={img1} className="w-2/5 lg:w-full" alt="coca cola logo" />
        <button
          type="button"
          aria-haspopup="true"
          onClick={isNavOpen}
          className="w-10 h-8 px-2 border  focus:outline-offset-2 focus:outline-2 focus:outline-slate-900"
        >
          <img src={menu} className=" w-8 h-6 lg:hidden" alt="menu bar" />
        </button>
      </div>
      <nav
        aria-hidden={isOpen ? 'false' : 'true'}
        className={
          isOpen
            ? 'relative flex flex-col gap-8 align-items lg:ml-auto lg:flex-row'
            : ' hidden'
        }
      >
        <ul className="flex flex-col gap-4 lg:align-items lg:flex-row">
          {navLists.map((list, i) => (
            <li
              key={list.id}
              onMouseEnter={() => props.handleDropDown(i)}
              onMouseLeave={() => props.setShowDropDown(false)}
              className={`py-4 border-b-2 lg:border-b-0 lg:hover:text-white ${list.color} lg:py-6 px-4 `}
            >
              <a href="" onClick={(e) => click(e)}>
                {list.listItem}
              </a>
            </li>
          ))}
          {/* <DropDowns/> */}
        </ul>
        <div className="w-20 flex gap-5 align-items div">
          <img src={search} className="dropImages" alt="search" />
          <img src={img2} className="dropImages" alt="browse" />
          <img src={access} className="dropImages" alt="accessibility" />
        </div>
      </nav>
    </div>
  )
}

export default Nav

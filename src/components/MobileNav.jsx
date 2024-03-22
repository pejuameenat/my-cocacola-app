import DropDowns from './DropDowns'
import NavSearchButtons from './NavSearchButton'

const MobileNav = ({
  currentElement,
  showDropDown,
  navigation,
  isOpen,
  handleMobileDropDown
}) => {
  return (
    <div className="w-screen lg:hidden">
      {isOpen && (
        <nav
          id="mobileView"
          className={
            isOpen
              ? 'bg-white fixed top-16 right-0 bottom-0 left-0 z-10 flex flex-col gap-8 align-items lg:ml-auto lg:flex-row'
              : ' hidden'
          }
          aria-hidden={isOpen ? 'false' : 'true'}
        >
          {navigation.map((item, i) => {
            return (
              <ul key={item.id} className="px-6">
                <li
                  aria-haspopup="true"
                  className={`border-b border-black py-3 lg:active:text-white ${item.color} px-4 lg:border-b-0`}
                  onClick={()=>handleMobileDropDown(i)}
                >
                  {item.listItem}
                </li>
                <DropDowns
                  currentElement={currentElement}
                  showDropDown={showDropDown}
                />
              </ul>
            )
          })}
          <NavSearchButtons />
        </nav>
      )}
    </div>
  )
}

export default MobileNav

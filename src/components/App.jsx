import { useEffect, useState } from 'react'
import Nav from './Nav'
import DropDowns from './DropDowns'
import Slider from './Slider'
import Goals from './Goals'
import Jobs from './Jobs'
import Cards from './Cards'
import Carousel from './Carousel'
import Footer from './Footer'
import { slides, featured } from '../data'
function App() {
  const [slider, setSlider] = useState(slides)
  const [feature, setFeature] = useState(featured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentElement, setCurrentElement] = useState(0)
  const [showDropDown, setShowDropDown] = useState(false)
  // const [windowWidth, setwindowWidth] = useState(null)

  function handleControlsClick(id) {
    setCurrentIndex(id)
  }

  function handleDropDown(i) {
    setCurrentElement(i)
    setShowDropDown(true)
  }
  // useEffect(()=>{
  //   window.addEventListener('load', isNavOpen)
  //  window.addEventListener('resize', isNavOpen)
  //  return ()=>{
  //     window.removeEventListener('load', isNavOpen)
  //     window.removeEventListener('resize', isNavOpen)
  //  }
  // }, [])

  return (
    <>
      <Nav handleDropDown={handleDropDown} setShowDropDown={setShowDropDown} />
      <DropDowns showDropDown={showDropDown} currentElement={currentElement} />
      <Slider
        slider={slider}
        handleControlsClick={handleControlsClick}
        currentIndex={currentIndex}
      />
      <Goals />
      <Carousel featured={feature} />
      <Jobs />
      <Cards />
      <Footer />
    </>
  )
}

export default App

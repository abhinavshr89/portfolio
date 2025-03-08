import React from 'react'
import useStore from '../store/navSwitch';
const NavButton = ({ content }) => {
  const {setActive} = useStore();
  return (
    <button
      onClick={() => setActive(content.toLowerCase())}
      className="cursor-pointer transition-all bg-[rgba(75,30,133,1)] text-white sm:px-2 py-1 rounded-sm
border-[#25143b] border-1
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-[10px] max-sm:text-[7px] max-sm:px-1"
    >
      {content}
    </button>
  )
}

export default NavButton
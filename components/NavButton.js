import React from 'react'
import useStore from '../store/navSwitch';

const NavButton = ({ content }) => {
  const {setActive} = useStore();
  return (
    <button
      onClick={() => setActive(content.toLowerCase())}
      className="cursor-pointer transition-all bg-gray-100 text-gray-700 sm:px-4 py-2 rounded-sm
border-gray-300 border-1
border-b-[4px] hover:bg-gray-200 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:bg-gray-300 active:translate-y-[2px] text-[20px] max-sm:text-[14px] max-sm:px-2 font-medium"
    >
      {content}
    </button>
  )
}

export default NavButton
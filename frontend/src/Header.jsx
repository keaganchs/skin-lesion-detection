import React from 'react';

import ToggleDarkModeButton from './components/ToggleDarkModeButton';

const Header = () => {
  

  return (
    <header>
      <div className="flex flex-row bg-sky-200 dark:bg-sky-800 justify-between px-[20px] py-[10px]">
        <p>Skin Lesion Detection</p>
        <ToggleDarkModeButton />
      </div>
    </header>
  )
}

export default Header;
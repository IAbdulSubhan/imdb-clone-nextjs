// Hooks works only in client side
'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
      {currentTheme === 'dark' ? <MdLightMode className='text-xl cursor-pointer hover:text-amber-500'/> : <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500'/>}
    </div>
  );
};

export default DarkModeSwitch;

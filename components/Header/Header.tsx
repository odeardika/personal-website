"use client";
import React from 'react';
import { MenuList } from '@/types/navbar.types';
import Navbar from '@components/Navbar/Navbar';
import HamburgerButton from '@components/HamburgerButton/HamburgerButton';
import Sidebar from '@components/Sidebar/Sidebar';

export default function Header() {
  const menuList: MenuList[] = [
    { id: 1, name: 'Home', href: '#' },
    { id: 2, name: 'About', href: '#' },
    { id: 3, name: 'Skills', href: '#' },
    { id: 4, name: 'Project', href: '#' },
    { id: 5, name: 'Contact', href: '#' },
  ];

  // check is page on y-0 or not
  const [isPageOnTop, setIsPageOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsPageOnTop(true);
      } else {
        setIsPageOnTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const handleHamburgerButtonClick = () => {
    setIsSidebarOpen((prevState) => !prevState);
  }
  return (
    <header className={`flex justify-between sticky top-0 bg-white ${isPageOnTop? "" : "shadow-sm"} px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48 py-8`}>
        <div className="flex basis-1/2">
          <h3 className="text-2xl font-semibold">odeardika.</h3>
        </div>
        
        <div>
          <div className='relative z-50'>
            <HamburgerButton onClick={handleHamburgerButtonClick} />
          </div>
          <Navbar menuList={menuList} />
          <Sidebar isOpen={isSidebarOpen} menuList={menuList} />
        </div>


    </header>
  )
}
"use client";
import React from 'react';
import { MenuList } from '@/types/navbar.types';
import Navbar from '@components/Navbar/Navbar';
import HamburgerButton from '@components/HamburgerButton/HamburgerButton';

export default function Header() {
  const menuList: MenuList[] = [
    { id: 1, name: 'Home', href: '#' },
    { id: 2, name: 'About', href: '#' },
    { id: 3, name: 'Skills', href: '#' },
    { id: 4, name: 'Project', href: '#' },
    { id: 5, name: 'Contact', href: '#' },
  ];

  return (
    <header className="flex justify-between px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48 py-8 ">
        <div className="flex basis-1/2">
          <h3 className="text-2xl font-semibold">odeardika.</h3>
        </div>
        
        <div>
          <HamburgerButton onClick={() => {}} />
          <Navbar menuList={menuList} />
        </div>


    </header>
  )
}
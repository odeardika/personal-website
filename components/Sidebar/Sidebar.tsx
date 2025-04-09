"use client";
import React from 'react'
import { MenuList } from '@/types/navbar.types';

interface SidebarProps {
    isOpen: boolean;
    menuList : MenuList[]
}
function Sidebar({isOpen, menuList} : SidebarProps) {
  
  return (
    <div
          className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-gray-50 shadow-md z-40 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          >
            <div className="text-white p-4 pt-12 flex flex-col justify-between h-full">
                <ul className="space-y-2">
                    {menuList.map((menu) => (
                        <li key={menu.id} className="py-2 border-b border-gray-300">
                            <a href={menu.href} className="text-black hover:text-gray-600 text-sm">
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
                
            </div>
    </div>
  )
}

export default Sidebar
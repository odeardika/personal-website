import React from 'react';
import { MenuList } from '@/types/navbar.types';



export default function Navbar({menuList} : {menuList: MenuList[]}) {
  return (
    <nav className='hidden md:block'>
        <ul className="flex grow justify-end gap-8 text-base">
            {menuList.map((item, index) => (
                <li key={index} className='inline-block bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-sky-500 transition-[background-size,color] duration-300 ease-out cursor-pointer'>
                  <a href={`${item.href}`}>{item.name}</a>
                </li>
            ))}
        </ul>

    </nav>
  )
}

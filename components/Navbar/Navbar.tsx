import React from 'react';
import { MenuList } from '@/types/navbar.types';



export default function Navbar({menuList} : {menuList: MenuList[]}) {
  return (
    <nav className='hidden md:block'>
        <ul className="flex grow justify-end gap-8 text-base">
            {menuList.map((item, index) => (
                <li key={index} className=''><a href={`${item.href}`}>{item.name}</a></li>
            ))}
        </ul>

    </nav>
  )
}

'use client';

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import NavItem from '../miscellaneous/dashboard-link';

const menuItems = [

  {
    name: 'My Catalogue', 
    props: {
      urlOne: `/bookstore/catalogue/books`, 
      urlTwo: `/bookstore/catalogue/new`, 
      one:`My Books`, 
      two: `Add New Book`,
    }
  },


]


export default function NavItemDrop() {
  return (
<>

  {
    menuItems.map((item, i) => (


      <Disclosure>
        {({ open }) => (
          <li key={i}>
            <Disclosure.Button className="pl-2 flex space-x-4 text-left text-base w-full hover:text-cyan-700">
              <ChevronRightIcon
                className={`${
                  open ? 'rotate-90 transform text-cyan-800' : 'text-slate-700'
                } h-5 w-5  `}
              />
              
              <span
                  className={`text-base   ${
                    open ? 'text-cyan-800 font-medium': 'text-slate-700'
                  } hover:text-cyan-700`}
              >{item.name}</span>                

            </Disclosure.Button>
            <div className="flex flex-col space-y-4 ml-11">

              <Disclosure.Panel className="text-left text-base text-slate-700 pt-6">  
                <NavItem href={item.props?.urlOne}>{item.props?.one}</NavItem>
              </Disclosure.Panel>
              <Disclosure.Panel className="text-left text-base text-slate-700">  
                <NavItem href={item.props?.urlTwo}>{item.props?.two}</NavItem>
              </Disclosure.Panel>
            </div>

          </li>
        )}
      </Disclosure>
  ))}
</>

  )
}

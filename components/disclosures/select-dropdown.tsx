'use client';

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'


export default function SelectDropdown({list}:{list:any}) {
  const [selected, setSelected] = useState(list[0])

  return (
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="text-sm relative ring ring-zinc-200 w-full rounded-lg bg-white py-1.5 pl-3 pr-10 text-left focus:ring-blue-400">
            <span className="text-sm text-cyan-800 font-semibold">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-slate-700"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-50 absolute w-full overflow-auto rounded-md bg-white border border-slate-100 py-1 text-sm shadow-md mt-1">
              {list.map((item:string, listIndex:number) => (
                <Listbox.Option
                  key={listIndex}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'text-cyan-800' : 'text-slate-700'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium text-cyan-800' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-800">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}

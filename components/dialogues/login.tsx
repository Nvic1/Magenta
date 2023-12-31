'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {SubmitHandler,useForm} from 'react-hook-form';
import Image from "next/image";

interface LoginInputs {
    
    username: string,
    password: string,
}


export const LoginDialogue = () => {

  let [IsOpen, setIsOpen] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm<LoginInputs>();


  const AuthLogin: SubmitHandler<LoginInputs> = (data) => {

    fetch('/api/auth').then(res => console.log(res));

  }

  const validationSchema = { 
    required: "can't be empty",
    minLength: {
      value: 8,
      message: "minimum length is 8 characters"
    }
}

  function CloseDialogue() {
    setIsOpen(false)
  }

  function OpenDialogue(){
    setIsOpen(true)
  }

  console.log(errors)

  return (
    <>
        <button onClick={OpenDialogue} className="absolute flex space-x-4 rounded-lg bg-cyan-900 px-3 py-1.5 cursor-pointer hover:bg-cyan-700 shadow-xl">
            <span>
                <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33_267)">
                    <path d="M39.6349 7.69023C39.2233 6.74164 38.5107 5.92477 37.6077 5.22055C36.2494 4.16508 34.437 3.34133 32.3172 2.76242C30.1973 2.18555 27.7676 1.86133 25.1814 1.86133C21.2402 1.86391 17.6655 2.60867 14.9888 3.8718C13.6504 4.50664 12.5306 5.27195 11.7074 6.18977C11.2971 6.64891 10.962 7.1493 10.7273 7.69023C10.4932 8.23117 10.3627 8.81445 10.3633 9.41133V11.7613L12.4072 13.3126V12.973C13.5894 14.0541 15.2493 14.9166 17.2347 15.5552C19.5237 16.2865 22.2506 16.7065 25.1814 16.7065C29.0898 16.7046 32.6323 15.9637 35.2641 14.7205C36.3227 14.2188 37.227 13.6322 37.955 12.9641V17.5613C37.8097 17.8732 37.6026 18.1858 37.3222 18.5009C36.4166 19.5209 34.7766 20.4818 32.6619 21.1539C30.5473 21.8305 27.965 22.2331 25.1814 22.2325C24.4566 22.2331 23.7517 22.1978 23.0591 22.1457L21.2711 23.5027C22.5169 23.6719 23.8256 23.7659 25.1814 23.7659C29.0898 23.7639 32.6323 23.0224 35.2641 21.7798C36.3227 21.2781 37.227 20.6916 37.955 20.0234V24.6206C37.8097 24.9325 37.6026 25.2452 37.3222 25.5609C36.4166 26.5809 34.7766 27.5412 32.6619 28.2139C30.5473 28.8905 27.965 29.293 25.1814 29.2925C21.5695 29.2944 18.3016 28.6088 15.9529 27.5393L14.5817 28.5798C15.3773 28.9973 16.2668 29.3626 17.2347 29.6739C19.5237 30.4052 22.2506 30.8251 25.1814 30.8258C29.0898 30.8239 32.6323 30.0823 35.2641 28.8398C36.3227 28.338 37.227 27.7509 37.955 27.0827V30.5898C37.955 30.894 37.892 31.1905 37.7595 31.4998C37.528 32.0381 37.061 32.6169 36.3523 33.1681C35.2911 33.9971 33.7038 34.7452 31.7795 35.2673C29.8559 35.7909 27.5958 36.097 25.1815 36.0964C21.5034 36.0996 18.1795 35.3819 15.8636 34.282C14.7046 33.7354 13.8042 33.0935 13.2318 32.4497C12.9437 32.1281 12.7366 31.8078 12.6034 31.4998C12.4703 31.1904 12.4079 30.894 12.4073 30.5898V30.2302L10.5107 31.6695C10.5686 31.8883 10.638 32.1037 10.7274 32.3108C11.1396 33.2594 11.8516 34.0762 12.7546 34.7811C14.1136 35.8366 15.9259 36.6604 18.0458 37.2392C20.1656 37.8161 22.5954 38.1396 25.1815 38.1402C29.1234 38.137 32.6967 37.393 35.3734 36.1291C36.7125 35.4944 37.8316 34.7297 38.6548 33.8112C39.0652 33.3527 39.4009 32.8523 39.6349 32.3108C39.8691 31.7705 40.0002 31.1865 39.999 30.5897V9.41133C40.0002 8.81445 39.8691 8.23109 39.6349 7.69023ZM37.955 10.5014C37.8097 10.8134 37.6026 11.1266 37.3222 11.4417C36.4166 12.4623 34.7766 13.4226 32.6619 14.0953C30.5473 14.7719 27.965 15.1745 25.1814 15.1739C21.4705 15.1758 18.1152 14.4555 15.7541 13.3352C14.5727 12.7769 13.6452 12.1202 13.0407 11.4417C12.7602 11.1266 12.5525 10.8134 12.4071 10.502V9.41125C12.4077 9.10695 12.4702 8.81117 12.6033 8.5018C12.8348 7.96281 13.3011 7.38461 14.0105 6.83281C15.0711 6.00383 16.6583 5.25586 18.5827 4.73422C20.507 4.21008 22.767 3.90453 25.1813 3.90516C28.8595 3.90195 32.1833 4.61969 34.4987 5.71953C35.6577 6.26555 36.558 6.90742 37.1304 7.55187C37.4185 7.87344 37.6256 8.19312 37.7595 8.5018C37.8919 8.81117 37.9549 9.10695 37.9549 9.41125V10.5014H37.955Z" fill="white"/>
                    <path d="M18.6384 21.7714L6.89391 12.8574V17.517H0V26.0259H6.89391V30.6855L18.6384 21.7714Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_33_267">
                    <rect width="40" height="40" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </span>
            <span className="text-white font-semibold tracking-wide text-base">Manage Bookstore</span>
        </button>    

      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={CloseDialogue}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative px-8 py-6 transform overflow-hidden rounded-md bg-white p-6  align-middle transition-all">
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold text-cyan-800 tracking-widest leading-loose uppercase">magenta books</p>
                        <p className="text-lg text-slate-700 font-medium tracking-tighter">Login</p>

                        <form action="" className="flex flex-col space-y-7 mt-6" onSubmit={handleSubmit(AuthLogin)}>
                            <div className="flex flex-col space-y-1 w-full">
                                <label htmlFor="username" className="text-sm font-normal uppercase text-left tracking-tighter leading-tighter text-slate-600">username</label>
                                <input {...register("username", validationSchema)} type="text"  className='text-sm w-full outline-none rounded-lg bg-slate-200 px-6 py-2 text-slate-800 placeholder-cyan-900 focus:ring-2 focus:ring-cyan-800 focus:bg-zinc-50' placeholder='Type Staff ID here'/>
                                {
                                errors && errors.username?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can't be empty</p>)
                                }
                                {
                                errors && errors.username?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                }
                            </div>

                            <div className="flex flex-col space-y-1 w-full">
                                <label htmlFor="password" className="text-sm font-normal uppercase text-left tracking-tighter leading-tighter text-slate-600">password</label>
                                <input {...register("password", validationSchema)} type="password"  className='text-sm w-full outline-none rounded-lg bg-slate-200 px-6 py-2 text-slate-800 placeholder-cyan-900 focus:ring-2 focus:ring-cyan-800 focus:bg-zinc-50' placeholder='Type Password here'/>
                                {
                                errors && errors.password?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can't be empty</p>)
                                }
                                {
                                errors && errors.password?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                }

                            </div>

                            <div className="flex w-full">
                                <button type='submit' className="block w-full px-6 py-2 text-zinc-50 bg-blue-500 rounded-md hover:text-blue-500 hover:bg-zinc-50 hover:ring-2 hover:ring-blue-500 hover:font-bold hover:underline">Sign In</button>
                            </div>
                            {/* <span className="flex space-x-2 items-center">
                                <svg fill="#2075b6" className="w-6 h-6" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"  stroke="#2075b6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Information-Filled"> <path d="M19,7.78c0.06,2.04-0.74,3.89-2.08,5.2C15.73,14.15,15,16.33,15,17H9c0-0.63-0.67-2.82-1.85-3.95C5.82,11.78,5,9.99,5,8 c0-3.92,3-7,7.16-7C16,1,18.89,4.13,19,7.78z M9,20c0,1.66,1.34,3,3,3s3-1.34,3-3v-1H9V20z"></path> </g> </g></svg>
                            </span> */}
                        </form>

                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

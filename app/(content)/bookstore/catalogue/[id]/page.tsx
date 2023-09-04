import Image  from 'next/image';

export default function SingleBook() {

    return (
        <main className="flex w-full">
            <section className="flex flex-col bg-amber-200 rounded-lg px-6 w-full">
                <div className="px-6 py-3 border-b-2 border-slate-900">
                    <header className="flex justify-between items-center">
                        <p className="text-xl font-bold text-slate-7">Book Details</p>
                        <div className="flex space-x-4 items-center">
                            <button className="flex px-4 py-2 rounded-md item-center space-x-2 border-2 border-red-800">
                                <span>
                                    <svg className='h-5 w-5' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
                                </span>
                                <p className="text-black text-base font-bold hover:text-red-800">Delete</p>
                            </button>   

                            <button className="flex px-4 py-2 rounded-md items-center space-x-2 border-2 border-green-800">
                                <span>
                                   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </span>
                                <p className="text-black text-base font-bold hover:text-green-800">Update</p>
                            </button>
                        </div>
                    </header>
                </div>

                <div className="flex-1 flex  mt-10 pb-10">
                    <div className="flex-1 flex flex-col">
                        <Image className='w-64 h-64' src={`/assets/images/books/time.jpg`} width={70} height={70} alt="book image"/>
                    </div>
                    <div className="flex-1 flex flex-col space-y-2">
                        <span className="flex space-x-1 items-center">
                            <p className="text-slate-700 font-medium">Book ID: &nbsp;</p>
                            <p className="text-slate-900 font-bold text-base">POWER-42</p>
                        </span>
                        <span className="flex space-x-1 items-center">
                            <p className="text-slate-700 font-medium">Book Name: &nbsp;</p>
                            <p className="text-slate-900 font-bold text-base">The Power of the Mind</p>
                        </span>
                        <span className="flex space-x-1 items-center">
                            <p className="text-slate-700 font-medium">Book Category: &nbsp;</p>
                            <p className="text-slate-900 font-bold text-base">Self-help</p>
                        </span>
                        <span className="flex space-x-1 items-center">
                            <p className="text-slate-700 font-medium">Book Price: &nbsp;</p>
                            <p className="text-slate-900 font-bold text-base">GHS 50</p>
                        </span>

                        <span className="flex flex-col  space-y-2 pt-8">
                            <p className="text-slate-700 font-medium underline">Book Description</p>
                            <p className="text-slate-900 font-bold text-base flex-wrap">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Adipisci eius ea tempore soluta sapiente reiciendis?
                            </p>
                        </span>                        
                    </div>
                </div>
            </section>
        </main>
    );
}
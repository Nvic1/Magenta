import { SearchBar } from '@/components/dialogues/searchbar';
import NavItemDrop from '@/components/disclosures/sidebar-items';
import NavItem from '@/components/miscellaneous/dashboard-link';
import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Book management system',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <main className='flex h-screen w-screen  bg-white'>
        <section className='flex flex-col'>
          <div className="flex space-x-4 items-cener p-6">
              <span>
                  <svg className='w-10 h-10 fill-cyan-800' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" enable-background="new 0 0 64 64"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#F9EBB2" d="M56,62H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h46V62z"></path> <g> <path fill="#45AAB8" d="M6,4v49.537C7.062,52.584,8.461,52,10,52h2V2H8C6.896,2,6,2.896,6,4z"></path> <path fill="#45AAB8" d="M56,2H14v50h42h2v-2V4C58,2.896,57.104,2,56,2z"></path> </g> <g> <path fill="#394240" d="M60,52V4c0-2.211-1.789-4-4-4H8C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1 s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M6,4c0-1.104,0.896-2,2-2h4v50h-2c-1.539,0-2.938,0.584-4,1.537V4z M56,62H10 c-2.209,0-4-1.791-4-4s1.791-4,4-4h46V62z M56,52H14V2h42c1.104,0,2,0.896,2,2v46v2H56z"></path> <path  d="M43,26H23c-0.553,0-1,0.447-1,1s0.447,1,1,1h20c0.553,0,1-0.447,1-1S43.553,26,43,26z"></path> <path fill="#394240" d="M49,20H23c-0.553,0-1,0.447-1,1s0.447,1,1,1h26c0.553,0,1-0.447,1-1S49.553,20,49,20z"></path> <path fill="#394240" d="M23,16h12c0.553,0,1-0.447,1-1s-0.447-1-1-1H23c-0.553,0-1,0.447-1,1S22.447,16,23,16z"></path> </g> <path opacity="0.2"  d="M6,4v49.537C7.062,52.584,8.461,52,10,52h2V2H8C6.896,2,6,2.896,6,4z"></path> </g> </g></svg>
              </span>
              <p className="text-cyan-800 font-bold text-base tracking-wider leading-loose">MagentaBooks</p>
          </div>
          <nav className='relative flex-1 pt-10 w-64 bg-zinc-50 rounded-r-xl'>
              <ul className='flex flex-col space-y-6 w-full'>
                  <li className='flex items-center space-x-4 pl-2'>
                    <span>
                    <svg className='h-6 w-6 fill-cyan-800' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M15.024 22C16.2771 22 17.3524 21.9342 18.2508 21.7345C19.1607 21.5323 19.9494 21.1798 20.5646 20.5646C21.1798 19.9494 21.5323 19.1607 21.7345 18.2508C21.9342 17.3524 22 16.2771 22 15.024V12C22 10.8954 21.1046 10 20 10H12C10.8954 10 10 10.8954 10 12V20C10 21.1046 10.8954 22 12 22H15.024Z" fill="#555753"></path> <path d="M2 15.024C2 16.2771 2.06584 17.3524 2.26552 18.2508C2.46772 19.1607 2.82021 19.9494 3.43543 20.5646C4.05065 21.1798 4.83933 21.5323 5.74915 21.7345C5.83628 21.7538 5.92385 21.772 6.01178 21.789C7.09629 21.9985 8 21.0806 8 19.976L8 12C8 10.8954 7.10457 10 6 10H4C2.89543 10 2 10.8954 2 12V15.024Z" fill="#555753"></path> <path d="M8.97597 2C7.72284 2 6.64759 2.06584 5.74912 2.26552C4.8393 2.46772 4.05062 2.82021 3.4354 3.43543C2.82018 4.05065 2.46769 4.83933 2.26549 5.74915C2.24889 5.82386 2.23327 5.89881 2.2186 5.97398C2.00422 7.07267 2.9389 8 4.0583 8H19.976C21.0806 8 21.9985 7.09629 21.789 6.01178C21.772 5.92385 21.7538 5.83628 21.7345 5.74915C21.5322 4.83933 21.1798 4.05065 20.5645 3.43543C19.9493 2.82021 19.1606 2.46772 18.2508 2.26552C17.3523 2.06584 16.2771 2 15.024 2H8.97597Z" fill="#555753"></path> </g></svg>                    </span>
                    <NavItem href='/bookstore'>Overview</NavItem>
                  </li>                    
                  <NavItemDrop/>

                  <div className="bottom-20 absolute left-0 ml-4 mb-14 flex flex-col space-y-4 items-center">

                    <div className="rounded-lg space-x-4 flex items-center bg-indigo-100 px-4 py-2">
                      <Image className='rounded-full' src={`/assets/images/users/peter.jpg`} width={60} height={60} alt='user image' />
                      <span className="flex flex-col items center">
                        <p className="text-slate-800 text-base font-bold tracking-wide">John Ayele</p>
                        <p className="text-cyan-900 text-sm font-normal tracking-tightest">Vendor</p>                                                                                                                                                                         
                      </span>

                    </div>

                    <Link href={`/`} passHref><p className='text-rose-600 underline text-base tracking-wide font-medium hover:opacity-30'>Logout</p></Link>
                  </div>
              </ul>
          </nav>
        </section>
        <section className='flex-1 flex flex-col pl-6 space-y-6 pr-6'>
            <header className='flex justify-between items-center relative9'>
              <search className='relative mt-4 mb-8'>
                <SearchBar />
              </search>

              <Link href={`/bookstore/catalogue/new`} className='mt-4 mr-4 absolute top-0 right-0 flex items-center space-x-3 px-6 py-2 bg-cyan-900 rounded-lg hover:bg-cyan-700'>
                <span className='text-white font-semibold text-base'>+</span>                                                             
                <span className="text-base text-white tracking-tight font-semibold">Add New Book</span>
              </Link>

            </header>
            <section className='overflow-hidden'>{children}</section>
        </section>
    </main>
  )
}

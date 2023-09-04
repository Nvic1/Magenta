import Link from 'next/link';


export default function MyBooks() {
    return (
        <main className="flex">
            <section className="flex rounded-lg flex-col px-6 py-4 bg-slate-200 mt-6">

                <span className="self-start flex p-4 items-center border-b-2 border-red-400">
                    <p className="text-lg font-bold tracking-wide text-slate-800">All Books</p>
                </span>


                <div className="relative px-32 py-6">

                    {/* Map books here */}

                    <table className="w-full text-sm text-left border-separate border-spacing-y-4">
                        <thead className="text-xs text-gray-500 uppercase">
                            <tr className=''>
                                <th scope="col" className="px-6 py-3">book id</th>
                                <th scope="col" className="px-6 py-3">book name</th>
                                <th scope="col" className="px-6 py-3">category</th>
                                <th scope="col" className="px-6 py-3">price</th>
                                <th scope="col" className="px-6 py-3">action</th>
                            </tr>
                        </thead>
                        <tbody className=''>


                            <tr className=" bg-white rounded-lg hover:bg-slate-100 cursor-pointer">
                                <td className="px-6 py-4">BK-01</td>
                                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">Love Will</th>
                                <td className="px-6 py-4">Self Help</td>
                                <td className="px-6 py-4 text-center">40</td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={`/`} className="font-medium text-rose-600  hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className=" bg-white rounded-lg hover:bg-slate-100 cursor-pointer">
                                <td className="px-6 py-4">BK-01</td>
                                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">Love Will</th>
                                <td className="px-6 py-4">Self Help</td>
                                <td className="px-6 py-4 text-center">40</td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={`/`} className="font-medium text-rose-600  hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className=" bg-white rounded-lg hover:bg-slate-100 cursor-pointer">
                                <td className="px-6 py-4">BK-01</td>
                                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">Love Will</th>
                                <td className="px-6 py-4">Self Help</td>
                                <td className="px-6 py-4 text-center">40</td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={`/`} className="font-medium text-rose-600  hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className=" bg-white rounded-lg hover:bg-slate-100 cursor-pointer">
                                <td className="px-6 py-4">BK-01</td>
                                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">Love Will</th>
                                <td className="px-6 py-4">Self Help</td>
                                <td className="px-6 py-4 text-center">40</td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={`/`} className="font-medium text-rose-600  hover:underline">Edit</Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </main>
    );
}
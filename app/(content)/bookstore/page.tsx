import Link from "next/link";
import Image from "next/image";


export default function Test() {
    return (
        <main className="px-6 py-4 flex flex-col h-full overflow-y-auto">
            <p className="text-slate-800 text-xl font-semibold underline mb-10">Top Rated</p>

            <section className="grid grid-cols-4 gap-x-6 gap-y-10">

                <Link href={`/null`}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                    <article className="flex flex-col pb-4 border-b-4 border-slate-300 hover:border-cyan-900 hover:shadow-xl">
                        <Image className='h-full w-full' src={`/assets/images/books/time.jpg`} width={50} height={50} alt='book'/>
                        <div className="flex flex-col mt-3">
                            <p className="text-cyan-900 text-base font-bold tracking-wide leading-loose">Refactor UI</p>
                            <span className="flex justify-between items-center">
                                <p className="text-sm text-slate-600 font-normal">By Adams</p>
                                <p className="font-black text-slate-900 text-xl">80<strong className='text-slate-600 text-sm font-medium'>¢</strong></p>
                            </span>
                            <span className="mt-4 self-start flex px-3 py-1 5 bg-orange-300 rounded-xl">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                <p className="text-sm tracking-tightest leading-tight font-normal text-orange-700">Self Help</p>
                            </span>
                        </div>

                    </article>
                </Link>
            </section>

        </main>
    );

}


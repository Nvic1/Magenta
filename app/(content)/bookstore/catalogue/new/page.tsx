'use client';

// import SelectDropdown from "@/components/disclosures/select-dropdown";
import {SubmitHandler, useForm} from 'react-hook-form';

interface Inputs  {
    book_id: string,
    book_name: string,
    book_category: string,
    book_price: string,
    book_description: string
}




export default function AddNewBook() {



    const {register, handleSubmit, formState:{errors}} = useForm<Inputs>();

    const validationSchema = {
        required: "can&apos;t be empty",
        minLength: {
            value: 5,
            message: "minimum length must be 8 characters"
        }
    }

    const submitBookAdd:SubmitHandler<Inputs> = (data) => {
          
        console.log(data)        
    }

    return (
        <main className='flex px-6 py-6'>
            <div className="flex flex-col">
                <span className="self-start flex p-4 items-center border-b-2 border-red-400">
                    <p className="text-lg font-bold tracking-wide text-slate-800">Add New Book</p>
                </span>

                <form className="flex mt-10" action="#" onSubmit={handleSubmit(submitBookAdd)}>


                    <div className="flex-none grid grid-cols-3 gap-x-6 gap-y-6">

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-700 font-medium tracking-tight' htmlFor="">Book ID</label>
                            <input {...register("book_id", validationSchema)} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-blue-400 focus:bg-white placeholder-slate-500" type="text"  placeholder="BK-0400"/>
                            {
                                errors && errors.book_id?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.book_id?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }                         
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-700 font-medium tracking-tight' htmlFor="">Book Name</label>
                            <input {...register("book_name", validationSchema)} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-blue-400 focus:bg-white placeholder-slate-500" type="text"  placeholder="The Power of Money"/>
                            {
                                errors && errors.book_name?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.book_name?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-700 font-medium tracking-tight' htmlFor="">Price</label>
                            <input {...register("book_price", validationSchema)} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-blue-400 focus:bg-white placeholder-slate-500" type="text"  placeholder="GHS 20"/>
                            {
                                errors && errors.book_price?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.book_price?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-700 font-medium tracking-tight' htmlFor="">Category</label>
                            {/* <SelectDropdown list={['Self Help', 'Motivation', 'Money','Love', 'Anime']} register={register}/> */}
                            <input {...register("book_category", validationSchema)}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-blue-400 focus:bg-white placeholder-slate-500" type="text" placeholder="Anime"/>
                            {
                                errors && errors.book_category?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.book_category?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1 col-span-3">
                            <label className='text-sm text-slate-700 font-medium tracking-tight' htmlFor="">Description</label>
                            <textarea {...register("book_description")} name="book_description" id="" cols={60} rows={4} className="p-6 ring ring-zinc-200 rounded-lg w-full outline-none resize-none border-none focus:ring-blue-400" placeholder="Love Will is written Steven T'challa"></textarea>
                            {
                                errors && errors.book_description?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.book_description?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }                            
                        </section>

                        <section className="flex space-x-10 items-center">
                            <button type='submit' className="px-3 py-1.5 bg-cyan-800 rounded-lg hover:bg-cyan-600">
                                <p className="text-base font-bold text-white">Save Changes</p>
                            </button>

                            <p className="text-sm font-normal text-rose-500 underline hover:opacity-40">Cancel</p>
                        </section>
                    </div>

                </form>

            </div>
        </main>
    )
}
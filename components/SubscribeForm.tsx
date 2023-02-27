'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SubscribeFormData {
    first_name: string;
    email: string;
}

const SubscribeForm = () => {
    const { handleSubmit, register, formState:{errors}} = useForm<SubscribeFormData>();
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: SubscribeFormData) => {
        setSuccess(true);
      
            fetch('/api/subscribe', {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(()=> {
                console.log(data);
                setSuccess(true)
            }).catch((err) => {
                console.log(err);
                setSuccess(false)
            })
      };    
    

    return (
       <>
        {success ? (
            <div className="flex flex-col max-w-2xl mx-auto py-10 my-10">
                <h3 className="text-2xl font-bold font-['Shadows_Into_Light'] text-[#957964] text-center">
                    Thank you for subscribing to my blog!
                </h3>
            </div>
        
        ): (

            <div className="flex flex-col items-center justify-center space-y-1 text-center mb-14 mt-10">
                <h3 className="text-3xl font-bold tracking-wider text-[#957964] font-['Shadows_Into_Light']">
                    Never miss a post!
                </h3>
                    <p className="max-w-screen-sm text-[13px] text-[#73736f] font-['Lato'] pb-1">
                        Subscribe today and stay up to date on the latest content.
                    </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-xl flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3"> 
                    <label htmlFor="" className="">
                        <input {...register("first_name", {required: true})} type="text" className="shadow border rounded py-2 px-4 form-input w-full ring-[#73736f] outline-none focus:ring"
                        placeholder="First name"
                    />
                        {errors.first_name && (
                            <span className="text-red-500"> 
                                This field is required
                            </span>
                        )}
                    </label>
                    <label htmlFor="" className="">
                        <input {...register("email", {required: true})} type="email" className="shadow border rounded py-2 px-4 form-input w-full ring-[#73736f] outline-none focus:ring"
                        placeholder="example@email.com"
                    />
                        {errors.email && (
                            <span className="text-red-500">
                                This field is required
                            </span>
                        )}
                    </label>
                    <input type="submit" value="Subscribe" className="mx-auto bg-[#73736f] hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold px-6 py-2 rounded cursor-pointer" />  
                </form>
            </div>
        )}
    </>
    )
}

export default SubscribeForm;
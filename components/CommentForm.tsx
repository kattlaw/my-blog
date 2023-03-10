'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Post from '../app/(user)/post/[slug]/page';

interface Props {
    post: Post;
}

interface CommentFormData {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const CommentForm = ({post}: Props) => {
  const { handleSubmit, register, formState:{errors}} = useForm<CommentFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: CommentFormData) => {
    setSubmitted(true);
  
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(()=> {
            console.log(data);
            setSubmitted(true)
        }).catch((err) => {
            console.log(err);
            setSubmitted(false)
        })
  };    
 
  return (
    <>
    {submitted ? (
        <div className="flex flex-col max-w-2xl mx-auto py-10 my-10 text-[#73736f]">
            <h3 className="text-3xl font-bold">Thank you for submitting your comment!</h3>
            <p>Once it has been approved, it will be shown below!</p>
        </div>

    ): (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-2xl mx-auto mb-10 p-5">
             <h3 className="text-sm text-gray-500">Enjoyed this post?</h3>
             <h4 className="text-xl md:text-3xl font-bold text-[#73736f]">Leave a comment below!</h4>
             <hr className="py-3 mt-2" />

             <input {...register("_id")} type="hidden" name="_id" value={post._id} />

             <label htmlFor="" className='block mb-5'>
                <span className='text-[#73736f]'>Name</span>
                <input {...register("name", {required: true})} type="text" className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-[#73736f] outline-none focus:ring"
                placeholder="Name"/>
             </label>
             <label htmlFor="" className="block mb-5">
                <span className="text-[#73736f]">Email</span>
                <input {...register("email", {required: true})} type="email" className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-[#73736f] outline-none focus:ring"
                placeholder="example@email.com"/>
             </label>
             <label htmlFor="" className="block mb-5">
                <span className="text-[#73736f]">Comment</span>
                <textarea {...register("comment", {required: true})} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-[#73736f] outline-none focus:ring" 
                placeholder="Leave comment here..." rows={8}/>
             </label>

             {/* validation errors */}

             <div className="flex flex-col p-5">
                 {errors.name && (
                     <span className="text-red-500">- The Name field is required</span>
                 )}
                                  {errors.email && (
                     <span className="text-red-500">- The Email field is required</span>
                 )}
                                  {errors.comment && (
                     <span className="text-red-500">- The Comment field is required</span>
                 )}
             </div>
             <input type="submit" className="mx-auto bg-[#73736f] hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold px-6 py-2 rounded cursor-pointer" />
          
    </form>
    )}
</>
    
  )
}

export default CommentForm
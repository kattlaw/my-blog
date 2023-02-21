import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import CommentForm from '../../../../components/CommentForm';
import {Post} from '../../../../typings';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';


type Props = {
    params: {
        slug: string;   
    };
};

//revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`*[_type=='post']
    { 
        slug,
    }
    `;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }));
}

async function Post({ params: { slug } }: Props) {

    const query = groq`
        *[_type=='post' && slug.current == $slug][0]{
            ...,
            author->,
            categories[]->,

            'comments': *[
            _type == 'comment' &&
            post._ref == ^._id &&
            approved == true] 
            { 
                name,
                email, 
                comment,
                _createdAt, 
            },     
        }
    `;
        
const post: Post = await client.fetch(query, { slug });
    
    return (
        <div>
            <hr className="border-[#b2b2b2] mb-8 mx-10" />
                <div className="w-[360px] relative md:w-[400px] mx-auto">
                    <Image 
                        className="object-contain object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        width={400}
                        height={400}
                    />
                <div className="absolute left-3 bottom-3 right-3 md:p-4 bg-[#fbf7ef] outline outline-white -outline-offset-[10px]">
                    <h1 className="p-4 text-[22px] md:p-2 md:text-[23.5px] font-light text-[#73736f] tracking-wide font-['Noto_Serif_Display']">
                        {post.title}
                    </h1>
                    <p className="text-[10px] pr-4 md:pr-1 font-['Lato'] text-[#73736f] font-light tracking-wider text-right pb-3 md:pb-0">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>
                </div>
                </div>
                <div>
                    <h2 className="italic pt-2 text-[#73736f] text-center">{post.description}</h2>
                </div>
          
            <article className="px-10 pb-28">        
                <div className="mt-14 text-base md:mx-10">
                <PortableText value={post.body} components={RichTextComponents} />
                </div>
                <div className="flex py-auto mx-auto md:mx-10 hover:underline">
                    <button className="text-[#73736f] text-[12px]">
                        <Link href="/">
                        <HiOutlineArrowLeft className="inline-flex mr-2" />
                            MAIN PAGE
                        </Link>
                    </button>
                </div>
            </article>
   
            <div className="relative min-w-[300px] px-3 md:px-10 mx-auto">
            <div className="flex flex-col mx-auto my-10 p-10 max-w-2xl mb-4 text-[#73736f] shadow border rounded">
                <h2 className="mt-1 mb-1 md:text-3xl lg:text-3xl leading-tight font-bold">Comments</h2>
            <hr className="py-3 mt-2" />
            <ul>
                {!post.comments.length && (
                    <p className="text-sm text-gray-500 italic"> No comments yet...</p> )}
                        {post.comments.map(Comment => {
                            return <p key={Comment._id} className="mb-1">
                    <p>
                    <span className="text-[#73736f] underline underline-offset-4 decoration-gray-300 bg-[#fbf7ef]">
                        <a href={`mailto:${Comment.email}`}>{Comment.name} </a>
                        <span className="text-[11px] italic pb-4">said on {new Date(Comment._createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "numeric",
                            year: "2-digit",
                            hour: "numeric",
                            minute: "2-digit"
                            })}
                            :
                        </span>
                        </span>
                        {''}
                        <br>
                        </br>
                    <p className="text-[14px] font-['Frank_Ruhl_Libre'] py-4 indent-2">{Comment.comment}</p>
                    </p>
                    <hr className="py-3 mt-2" />
                    </p>
                })}     
            </ul>
            </div>
            <div className="flex-col mx-auto my-10 p-10 max-w-2xl mb-4 text-[#3b3b58] shadow-gray-500">
                <CommentForm post={post}/>
            </div>
        </div>
    </div>    
    )
}


export default Post



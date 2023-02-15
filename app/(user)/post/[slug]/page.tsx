import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import CommentForm from '../../../../components/CommentForm';
import {Post} from '../../../../typings';


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
        slug
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
        <article className="px-10 pb-28">
            <section className="space-y-2 border border-[#3c4048] text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image 
                            className="object-cover object-center mx-auto"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>
                    <section className="p-5 bg-[#3c4048] w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                        </div>
                    </section>
                </div>
            </section>
            <div className="mt-10 text-base mx-10">
            <PortableText value={post.body} components={RichTextComponents} />
            </div>
        </article>
   
        <div className="relative min-w-[400px] mx-auto">
            <div className="flex flex-col mx-auto my-10 p-10 max-w-2xl mb-4 text-[#3b3b58] shadow">
            <h2 className="mt-2 mb-4 text-2xl lg:text-3xl leading-tight">Comments</h2>
        <ul>
        {post.comments && post.comments.map(Comment => {
            return <div key={Comment._id} className="mb-5">
                <hr className="mb-5" />
                <p>
                    <span className='text-[#3b3b58]'>
                        <a href={`mailto:${Comment.email}`}>{Comment.name} </a> 
                        <span className="text-sm italic">{new Date(Comment._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "numeric",
                                        year: "numeric",
                                    })}
                        </span>
                        </span> : {Comment.comment}
                </p>
            </div>
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



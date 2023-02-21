import Image from 'next/image';
import urlFor from '../lib/urlFor';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ClientSideRoute from './ClientSideRoute';
import Post from '../app/(user)/post/[slug]/page';

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
    console.log(posts.length);
    return (
        <div>
            <hr className="border-[#b2b2b2] mb-10 mx-10" />
            <div className="flex flex-col-1 justify-center flex-wrap pb-24 gap-y-5 md:flex-col-2 md:space-x-4 md:justify-space-between md:px-5 lg:flex-col-3">
                {posts.map(post => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                    <div className="flex-col group cursor-pointer">
                        <div className="relative w-[390px] h-[263px] md:w-[375px] lg:w-[390px]">
                            <Image
                                className="object-cover object-center"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            </div>
                            <div className="flex flex-row justify-center -mt-8">
                            <div className="w-[325px] bg-[#fbf7ef] drop-shadow-sm outline p-5 outline-white -outline-offset-[10px]">
                                <div>
                                    <p className="font-['Noto_Serif_Display'] text-[20px] font-light text-[#73736f] tracking-wide">{post.title}</p>
                                    <p className="text-[10px] font-['Lato'] text-[#73736f] font-light tracking-wider">
                                        {new Date(post._createdAt).toLocaleDateString('en-US', {
                                            day: "numeric",
                                            month: "numeric",
                                            year: "numeric"
                                        }).split('/').join('.')}
                                    </p>
                                    <p className="line-clamp-2 text-[#73736f] text-[15px] font-['Lato'] mt-8 tracking-wide">{post.description}</p>
                                </div>
                               {/*<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                    {post.categories.map((category) => (
                                    <div className="text-center px-3 py-1 text-sm">
                                        <p className="font-['Lato']">{category.title}</p>
                                    </div>
                                    ))}
                                    </div> */}
                                    <p className="mt-9 font-bolder text-[11px] text-sm flex items-center group-hover:underline text-[#73736f] font-['Lato']">
                                        READ MORE 
                                        <HiOutlineArrowNarrowRight className="ml-2 h-4 w-4" />
                                    </p>
                            </div>
                        </div>
                        <div className="mt-3 flex-initial w-96 md:w-[23rem] lg:w-96">
                        </div> 
                    </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );   
}

export default BlogList;
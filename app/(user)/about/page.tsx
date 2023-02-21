'use client'
import Image from 'next/image';
import Link from 'next/link';
import KMom from '../../../public/memom.jpeg';
import Mom from '../../../public/mom2.jpeg'
export default function About() {
    return (
        <div>
            <hr className="border-[#b2b2b2] mb-8 mx-10" />
            <div className="relative">
                <h2 className="text-[28px] md:text-3xl mx-8  md:mx-12 font-bold font-['Shadows_Into_Light'] text-[#957964]">Hi, I'm Katherine...thanks for stopping by.
                </h2>
                <div className="text-sm grid grid-col-1 md:grid-cols-2">
                    <div className="mb-5 md:mt-6">
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre'] text-sm"><span className="font-bold">I am a grieving daughter</span>. Yes, I suppose I am other things, but since <span className="font-bold">I lost my Mom to a rare cancer in 2021</span>, I have been mostly that.
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">If you're here because you share a similar experience, first of all, let me say, from the bottom of my heart, <span className="font-bold">I am so sorry</span>. I hope that in reading my posts, <span className="font-bold">you will find that you are not alone.</span>
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">When I first started this blog, I had no intentions of writing about my grief. I recently switched careers to work in Software Engineering and I wanted to design and keep a blog as a side project.
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">I began thinking about topics I would blog about, and came back to why I made this blog in the first place. You can find that post <Link className="font-['Frank_Ruhl_Libre'] underline underline-offset-4 underline decoration-[#957964] underline decoration-2" href="/post/from-crosswords-to-coding">here</Link>. In the end, it all came back to my Mom.
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">Writing it was emotional, but oddly comforting. The words flowed easily, and <span className="font-bold">I felt a connection to the day I lost my Mom that I had not felt before</span>.
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">Most, importantly, it was <span className="font-bold italic">theraupetic</span>. So, maybe, there's opportunity here. An outlet into the abyss for all the emotions that come along with such a significant loss... 
                    </p>
                    <p className="mx-8 md:ml-[5em] mt-5 font-['Frank_Ruhl_Libre']">...And then maybe, just maybe, someone who is going through this awfulness - because, let's face it, <span className="italic">it never goes away</span> - will stumble upon this blog and it will help them. Grieving is hard enough. <span className="font-bold">We should not have to do it alone in silence.</span>
                    </p>
            </div>
                <div className="w-80 mx-auto md:mt-[2.5em] md:mb-[7em] lg:mt-[1em] space-y-2 md:space-y-0 mb-8 drop-shadow-lg">
               
                     <Image
                        className="object-contain md:rotate-12 md:w-[280px] contrast-75"
                        src={KMom}
                        alt="My Mom and I"
                    />
               
                      <Image
                        className="object-contain md:-rotate-12 md:mb-[5em] md:w-[290px]"
                        src={Mom}
                        alt="My Mom and I celebrating my birthday"
                    />
    
                </div>
               </div>
            </div>
       </div>
    )
}


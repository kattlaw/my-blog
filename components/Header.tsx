import Link from 'next/link';
import { BsGithub, BsLinkedin, BsRssFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdRssFeed } from 'react-icons/md';



function Header() {
    return (
        <header className="w-full py-1 px-4 md:px-10 flex flex-nowrap items-center justify-between">
            <div>
                <Link 
                    href="/"
                >
                    <span className="text-2xl md:text-4xl text-[#957964] font-['Shadows_Into_Light'] font-bold tracking-wide">
                        Bereaving Out Loud 
                    </span>
                    <br></br>
                    <span className="text-sm md:text-base text-[#73736f] font-['Reenie_Beanie'] font-bold ml-[1em] md:ml-[5em]">
                        Confessions of a grieving daughter...
                    </span>
                </Link>  
            </div>
            <div className="flex flex-nowrap pb-0 md:gap-2 items-center tracking-wider text-[12px]">
                <Link
                    href="/"
                    className="px-1 hover:underline"    
                >
                    HOME
                </Link>
                <Link
                    href="/about"
                    className="md:mr-8 lg:mr-16 px-1 hover:underline"
                >
                    ABOUT
                </Link>
                <div className="hidden md:flex flex-wrap pb-0 md:gap-2 items-center">
                <Link 
                    href="https://linkedin.com/in/katlawdev" 
                    className="pl-3 ml-3 mr-2 hover:text-[#957964] text-[13px]"
                >
                    <BsLinkedin />
                </Link>
                <Link 
                    href="https://github.com/kattlaw" 
                    className="mr-2 hover:text-[#957964] text-[13px]"
                >
                    <BsGithub />
                </Link>
                <a 
                    href="mailto:klaw@klawdev.com" 
                    className="mr-2 hover:text-[#957964] text-[14px]"
                >
                    <HiOutlineMail />
                </a>
                {/*<Link 
                    href="/rss.xml"
                    className="hover:text-[#957964] text-[15px] text-[#ee802f]"
                >
                    <MdRssFeed />
    </Link>*/}
                </div>

            </div>
        </header>
    )
}

export default Header;
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdRssFeed } from 'react-icons/md';

function Footer() {
    return (
        <footer className="text-center lg:text-left p-4 shadow px-6 py-8">
            <div className="flex justify-center">
                <ul className="flex flex-wrap items-center gap-2 h-4 md:text-[20px]">
                    <li>
                        <Link href="https://linkedin.com/in/katlawdev" 
                            className="mr-4 hover:text-[#957964] md:mr-6"
                        >
                            <BsLinkedin />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/kattlaw" 
                            className="mr-4 hover:text-[#957964] md:mr-6"
                        >
                            <BsGithub />
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="mailto:klaw@klawdev.com" 
                            className="mr-4 hover:text-[#957964] md:mr-6 md:text-[21px]"
                        >
                            <HiOutlineMail />
                        </a>
                    </li>
                    <li>
                        <Link 
                            href="/rss.xml"
                            className="mr-4 hover:text-[#957964] md:text-[21px] text-[#ee802f] md:mr-6"
                        >
                            <MdRssFeed />
                        </Link>
                    </li>
                </ul> 
                 
            </div>
                <hr className="my-6 mx-4 border-[#b2b2b2]" />
                <span className="block text-sm text-[#76768a] text-center -mb-2 font-['Frank_Ruhl_Libre']">© 2023
                <Link href="https://klawdev.com" className="text-[#73736f] hover:underline hover:text-[#76768a] font-['Lato']"> Katherine Law</Link> | All Rights Reserved.
                </span>
        </footer>
       
    )
}

export default Footer;
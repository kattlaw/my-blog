import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
    return (
        <footer className="text-center lg:text-left p-4 shadow px-6 py-8">
            <div className="flex justify-center">
                <ul className="flex flex-wrap items-center gap-4 h-8 text-[20px]">
                    <li>
                        <Link href="https://github.com/kattlaw" 
                            className="text-[#3b3b58] mr-4 hover:underline hover:text-[#76768a] md:mr-6">
                            <BsGithub />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/katlawdev" 
                            className="text-[#3b3b58] mr-4 hover:underline hover:text-[#76768a] md:mr-6">
                            <BsLinkedin />
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="mailto:klaw@klawdev.com" 
                            className="text-[#3b3b58] mr-4 hover:underline hover:text-[#76768a] md:mr-6">
                            <HiOutlineMail />
                        </a>
                    </li>
                </ul>
            </div>
                <hr className="my-6 border-[#b2b2b2]" />
                <span className="block text-sm text-[#76768a] text-center -mb-2 font-['Frank_Ruhl_Libre']">© 2023
                <Link href="https://klawdev.com" className="text-[#3b3b58] hover:underline hover:text-[#76768a] font-['Frank_Ruhl_Libre']"> Katherine Law</Link>. All Rights Reserved.
                </span>
      </footer>
       
    )
}

export default Footer;
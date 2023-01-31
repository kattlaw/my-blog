import Link from 'next/link';
import Image from 'next/image';
import myLogo from '../public/assets/images/logo7.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold text-[#3c4048] px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image 
                        src={myLogo}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="logo"
                    />
                </Link>
            <h1></h1>
            </div>

            <div className="inline-flex">
        
            <Link
                href="https://klawdev.com"
                className="px-2 py-3 text-base text-[#3c4048] inline-flex items-center text-center">
                    Portfolio
            </Link>
            <Link
                className="px-2 py-3 text-lg text-[#3c4048] inline-flex items-center text-center"
                href="https://linked.in/in/katlawdev">
                <BsLinkedin />
            </Link>
            <Link
                 className="px-2 py-3 text-lg text-[#3c4048] inline-flex items-center text-center"
                href="https://github.com/kattlaw">
                <BsGithub />
                </Link>
           
            </div>
        </header>
    )
}

export default Header;
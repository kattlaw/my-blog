import Link from 'next/link';
import Image from 'next/image';
import myLogo from '../public/assets/images/logo4.png';

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
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

            <div>
            <Link
                href="https://klawdev.com"
                className="px-5 py-3 text-sm md:text-base bg-[#4c5270] text-[#bcece0] flex items-center rounded-full text-center">
                    My Portfolio
                </Link>
            </div>
        </header>
    )
}

export default Header;
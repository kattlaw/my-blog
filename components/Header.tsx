import Link from 'next/link';

function Header() {
    return (
        <header className="w-full py-5 px-10 flex justify-start items-center justify-between">
            <div>
                <Link href="/">
                    <span className="text-2xl md:text-4xl text-[#957964] font-['Shadows_Into_Light'] font-bold flex-grow tracking-wide">
                    Bereaving Out Loud </span>
                    <br></br>
                    <span className="text-sm md:text-base text-[#76768a] font-['Reenie_Beanie'] font-bold ml-[1em] md:ml-[5em]">
                    Confessions of a grieving daughter...
                    </span>
                </Link>  
            </div>
            <div className="flex pb-0 md:gap-5">
                <Link
                    className="px-1 text-[12px] hover:underline"
                    href="/">
                    Home
                </Link>
                <Link
                    className="px-1 text-[12px] hover:underline"
                    href="/about">
                    About
                </Link>
                <Link
                    className="px-1 text-[12px] hover:underline"
                    href="#footer">
                    Contact
                </Link>
            </div>
        </header>
    )
}

export default Header;
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#78c4c8] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text=[#78c4c8] mr-2" />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}
export default StudioNavbar;

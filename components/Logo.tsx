import React from 'react';
import Image from 'next/image';
import myLogo from '../public/logo7.png';

function Logo(props: any) {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full object-cover"
                height={50}
                width={50}
                src={myLogo}
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
}

export default Logo;
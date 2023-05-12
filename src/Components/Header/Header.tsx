import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header: React.FC = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
                <StaticImage
                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/Total%20Electric%20Pro%20Min.png'
                    alt='Total Electric Pro'
                    height={320}
                />
                <div className='flex'>
                    <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                        <a
                            href='#home'
                            className='inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
                        >
                            Home
                        </a>
                        <a
                            href='#services'
                            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                            Services We Provide
                        </a>
                        <a
                            href='#contactus'
                            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                            Get in Touch
                        </a>
                    </div>
                    <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                        <a
                            id='facebook_profile'
                            className='facebook_profile'
                            title='Facebook'
                            href='https://www.facebook.com/profile.php?id=100090925221299'
                        >
                            <span className='at-icon-wrapper'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                    viewBox='0 0 32 32'
                                    version='1.1'
                                    role='img'
                                    aria-labelledby='at-svg-facebook-3'
                                    className='at-icon at-icon-facebook'
                                    style={{
                                        width: '32px',
                                        height: '32px'
                                    }}
                                >
                                    <title id='at-svg-facebook-3'>
                                        Facebook
                                    </title>
                                    <g>
                                        <path
                                            d='M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z'
                                            fillRule='evenodd'
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

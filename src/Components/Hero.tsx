import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Hero: React.FC = () => {
    return (
        <section id='home' className='relative'>
            <div className='w-screen'>
                <StaticImage
                    className='sm:block lg:hidden'
                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_5390.jpg'
                    alt='Total Electric Pro'
                />
                <StaticImage
                    className='hidden lg:block'
                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_5390.jpg'
                    alt='Total Electric Pro'
                />
            </div>

            {/* gradient */}
            <div className='absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-black to-transparent'></div>

            <div className='absolute top-0 left-0 w-full h-full flex'>
                <div className='mx-auto max-w-7xl flex items-center'>
                    <div className='w-1/2 pl-6'>
                        <p className='text-white lg:text-7xl font-bold sm:text-8xl'>
                            Residential & Commercial Electrical Services <br />{' '}
                            in San Antonio and Surrounding Areas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

export const Head: HeadFC = () => <title>Total Electric Pro</title>;

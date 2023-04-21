import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Hero: React.FC = () => {
    return (
        <section id='home' className='relative'>
            <div className='w-screen'>
                <StaticImage
                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/landscape-modern-farmhouse-wide-night.jpg'
                    alt='Total Electric Pro'
                />
            </div>

            {/* gradient */}
            <div className='absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-black to-transparent'></div>

            <div className='absolute top-0 left-0 w-full h-full flex'>
                <div className='mx-auto max-w-7xl flex items-center'>
                    <div className='w-1/2 pl-6'>
                        <p className='text-white text-6xl font-bold '>
                            Residential & Commercial Electrical Services in{' '}
                            <br /> San Antonio and Surrounding Areas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

export const Head: HeadFC = () => <title>Total Electric Pro</title>;

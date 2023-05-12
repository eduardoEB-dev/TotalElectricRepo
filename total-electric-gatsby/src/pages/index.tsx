import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Transition } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
    ArrowUpCircleIcon
} from '@heroicons/react/24/outline';

const IndexPage: React.FC<PageProps> = () => {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: '40rem'
    };

    const [isShowing, setIsShowing] = React.useState(false);

    const features = [
        {
            name: 'Panel Repair',
            description: `Our experienced electricians are skilled in repairing and maintaining electrical panels to ensure they are functioning safely and efficiently. Whether it's fixing faulty circuit breakers, replacing worn-out fuses, or repairing loose connections, we have the expertise to restore the integrity of your electrical panel. We use industry-leading techniques and high-quality components to repair or replace damaged or outdated components, ensuring that your electrical panel meets the highest safety standards and complies with local electrical codes.`
            //   icon: TrashIcon,
        },
        {
            name: 'Trouble Shooting Electrical Issues',
            description: `Our skilled electricians are trained in diagnosing and resolving electrical issues efficiently and effectively. From identifying the root cause of circuit failures to resolving electrical malfunctions, we have the expertise to troubleshoot and diagnose a wide range of electrical problems. Using state-of-the-art diagnostic tools and techniques, we quickly assess electrical issues and provide reliable solutions to get your electrical systems back up and running smoothly.`
            //   icon: PencilSquareIcon,
        },
        {
            name: 'Custom Lighting',
            description: `Enhance the aesthetic appeal and functionality of your space with our custom lighting solutions. Our skilled electricians are experts in designing, installing, and maintaining custom lighting systems that are tailored to your unique needs and preferences. Whether you're looking to add ambiance to your home, showcase your business, or create a stunning outdoor lighting display, we can bring your vision to life.`
            //   icon: ChatBubbleOvalLeftEllipsisIcon,
        },
        {
            name: 'Remodeling',
            description: `Whether you're renovating your home, updating your business, or remodeling a commercial property, our experienced electricians can assist you with all your electrical needs. We offer comprehensive electrical remodeling services that include electrical design, installation, and upgrades to meet the specific requirements of your remodeling project.`
            //   icon: HeartIcon,
        }
    ];

    React.useEffect(() => {
        setIsShowing(true);
    }, []);
    return (
        <div className='relative'>
            <Header />
            {/* <div>
                                RESIDENTIAL & COMMERCIAL ELECTRICAL SERVICES
                            </div> */}
            <Hero />
            <section
                id='ContentV3MainContent'
                className='mx-auto max-w-7xl p-6 flex'
            >
                <div className='lg:w-1/2 sm:w-1/2 mr-20'>
                    <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        We're here for you!
                    </h2>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Our licensed electricians are ready to help you with any
                        electrical project you may have. We are a full-service
                        electrical company that can handle any job, big or
                        small. We are committed to providing our customers with
                        the highest quality of service and workmanship. We are
                        licensed, bonded, and insured. We are proud to be a
                        family-owned and operated business with a commitment to
                        provide our customers with the highest quality of
                        service and workmanship.
                    </p>
                </div>
                <div className='lg:w-1/2 flex justify-end'>
                    <Splide
                        aria-label='My Favorite Images'
                        options={options}
                        aria-labelledby='autoplay-example-heading'
                        hasTrack={false}
                    >
                        <SplideTrack>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/60107504666__039FE174-B197-4A96-98F4-8AA8A9C6097A.JPG'
                                    alt='Image 1'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/61730490841__9E79195F-6D34-4DC8-B9E6-8454C5D0AA89.JPG'
                                    alt='Image 2'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/60107504666__039FE174-B197-4A96-98F4-8AA8A9C6097A.JPG'
                                    alt='Image 3'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/57713481425__CEA1081C-3B03-44BB-974D-E424F58538B6.JPG'
                                    alt='Image 4'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_0420.JPG'
                                    alt='Image 5'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_0422.JPG'
                                    alt='Image 6'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/HouseOutdoorLights.jpg'
                                    alt='Image 7'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/341162703_1642579116166137_8026099221166022931_n.jpg'
                                    alt='Image 8'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_7472.JPG'
                                    alt='Image 9'
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    className='object-contain'
                                    src='https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/IMG_7475.JPG'
                                    alt='Image 10'
                                />
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </div>
            </section>
            <section
                id='services'
                className='mx-auto max-w-7xl flex items-center'
            >
                <div className='bg-white py-24 sm:py-32'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <div className='mx-auto max-w-2xl lg:text-center'>
                            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                Services We Provide
                            </p>
                        </div>
                        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className='flex flex-col'
                                    >
                                        <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                                            {/* <feature.icon
                                                className='h-5 w-5 flex-none text-indigo-600'
                                                aria-hidden='true'
                                            /> */}
                                            {feature.name}
                                        </dt>
                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                            <p className='flex-auto'>
                                                {feature.description}
                                            </p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contactus' className='min-h-screen'>
                <div className='relative isolate bg-white'>
                    <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center'>
                        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                                <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2'></div>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                                    Get in touch
                                </h2>
                                <p className='mt-6 lg:text-lg sm:text-sm leading-8 text-gray-600'>
                                    We're here to help! If you have any
                                    questions, need more information, or would
                                    like to schedule a service, please fill out
                                    the form or give us a call. Our friendly
                                    team of electricians is ready to assist you
                                    with your electrical needs. Contact us today
                                    and experience our professional service and
                                    expertise firsthand. We look forward to
                                    hearing from you!
                                </p>
                                <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
                                    <div className='flex gap-x-4'>
                                        <dt className='flex-none'>
                                            <span className='sr-only'>
                                                Address
                                            </span>
                                            <BuildingOffice2Icon
                                                className='h-7 w-6 text-gray-600'
                                                aria-hidden='true'
                                            />
                                        </dt>
                                        <dd>
                                            {/* 545 Mavis Island */}
                                            {/* <br /> */}
                                            San Antonio, TX, United States
                                        </dd>
                                    </div>
                                    <div className='flex gap-x-4'>
                                        <dt className='flex-none'>
                                            <span className='sr-only'>
                                                Telephone
                                            </span>
                                            <PhoneIcon
                                                className='h-7 w-6 text-gray-600'
                                                aria-hidden='true'
                                            />
                                        </dt>
                                        <dd>
                                            <a
                                                className='hover:text-gray-900'
                                                href='tel:+1 (555) 234-5678'
                                            >
                                                +1 (210) 350-7143
                                            </a>
                                        </dd>
                                    </div>
                                    <div className='flex gap-x-4'>
                                        <dt className='flex-none'>
                                            <span className='sr-only'>
                                                Email
                                            </span>
                                            <EnvelopeIcon
                                                className='h-7 w-6 text-gray-600'
                                                aria-hidden='true'
                                            />
                                        </dt>
                                        <dd>
                                            <a
                                                className='hover:text-gray-400'
                                                href='mailto:zach@totalelectricprosa.com'
                                            >
                                                zach@totalelectricprosa.com
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <form
                            target='_blank'
                            action='https://formsubmit.co/esteuardo@gmail.com'
                            method='POST'
                        >
                            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
                                <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                                    <div>
                                        <label
                                            htmlFor='firstname'
                                            className='block text-sm font-semibold leading-6 text-gray-900'
                                        >
                                            First name
                                        </label>
                                        <div className='mt-2.5'>
                                            <input
                                                type='text'
                                                name='firstname'
                                                id='firstname'
                                                autoComplete='given-name'
                                                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='lastname'
                                            className='block text-sm font-semibold leading-6 text-gray-900'
                                        >
                                            Last name
                                        </label>
                                        <div className='mt-2.5'>
                                            <input
                                                type='text'
                                                name='lastname'
                                                id='lastname'
                                                autoComplete='family-name'
                                                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-semibold leading-6 text-gray-900'
                                        >
                                            Email
                                        </label>
                                        <div className='mt-2.5'>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                autoComplete='email'
                                                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <label
                                            htmlFor='phonenumber'
                                            className='block text-sm font-semibold leading-6 text-gray-900'
                                        >
                                            Phone number
                                        </label>
                                        <div className='mt-2.5'>
                                            <input
                                                type='tel'
                                                name='phonenumber'
                                                id='phonenumber'
                                                autoComplete='tel'
                                                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                            />
                                        </div>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-semibold leading-6 text-gray-900'
                                        >
                                            Message
                                        </label>
                                        <div className='mt-2.5'>
                                            <textarea
                                                name='message'
                                                id='message'
                                                rows={4}
                                                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-8 flex justify-end'>
                                    <button
                                        type='submit'
                                        className='rounded-md bg-yellow-300 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 hover:text-white focus-visible:outline-offset-2 focus-visible:outline-yellow-600'
                                    >
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <a href='#' className='block fixed bottom-8 right-8 h-12 w-12'>
                <ArrowUpCircleIcon
                    className='text-gray-400 hover:text-gray-500'
                    aria-hidden='true'
                />
            </a>
        </div>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Total Electric Pro</title>;

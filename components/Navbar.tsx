import { FC, MouseEventHandler, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [burgerOpen, setBurgerOpen] = useState(false)


    const handleBurgerClick = (e: MouseEventHandler<HTMLDivElement>) => {
        setBurgerOpen(prevStatus => !prevStatus)
    }

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset
            if (scrollTop > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const opacityClass = isScrolled ? 'opacity-80 md:top-1' : 'opacity-100 md:top-5'

    return (
        <div
            className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white py-2 shadow backdrop-blur-lg md:rounded-3xl lg:max-w-screen-lg transition-all duration-300 ${opacityClass}`}
        >
            <div className="px-4">
                <div className="flex items-center justify-between ">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="#">
                            <Image
                                className="h-7 w-auto"
                                src="/logo.svg"
                                alt="website logo"
                                width={125}
                                height={125}
                            />
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <Link
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="/Analyzer"
                        >Analyzer</Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="/PDF"
                        >PDF</Link>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                        >
                            Pricing
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                        >
                            Support
                        </a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <a
                            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                            href="#"
                        >
                            Sign in
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-cyan-500 bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="#"
                        >
                            Login
                        </a>
                        <div className='group rotate-90 flex md:hidden cursor-pointer select-none' onClick={handleBurgerClick}>
                            <span className={`text-xl transition duration-200 inline-block  ${burgerOpen ? 'translate-x-2/4 -rotate-45' : 'translate-x-0'} `}>|</span>
                            <span className={`text-xl transition duration-200 inline-block ${burgerOpen ? 'opacity-0' : 'opacity-100'} `}>|</span>
                            <span className={`text-xl transition duration-200 inline-block  ${burgerOpen ? '-translate-x-2/4 rotate-45' : 'translate-x-0'}`}>|</span>
                        </div>
                    </div>

                    <div className={`${burgerOpen ? '' : 'opacity-0'} transition duration-300 dropdown absolute bg-white rounded-lg mt-5 shadow-xl indent-0 right-0 top-3/4`}>
                        <div className="px-4 py-2">
                            <a href="#" className=' group px-4 py-2 text-base font-medium rounded-lg bg-gray-300 text-gray-700 hover:text-stone-300 hover:bg-cyan-700 transition duration-500 flex items-center'>
                                <svg className="h-6 w-6 mr-2 group-hover:rotate-180 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                Sign In
                            </a>

                            <p className="text-gray-400 text-sm mt-3">Explore</p>
                            <ul className="mt-2 space-y-4">
                                <li>
                                    <a href="#" className=' group px-4 py-2 text-base font-medium rounded-lg text-gray-700 hover:text-stone-300 hover:bg-cyan-700 transition duration-500 flex items-center'>
                                        <svg className="h-6 w-6 mr-2 group-hover:rotate-180 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=' group px-4 py-2 text-base font-medium rounded-lg text-gray-700 hover:text-stone-300 hover:bg-cyan-700 transition duration-500 flex items-center'>
                                        <svg className="h-6 w-6 mr-2 group-hover:rotate-180 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Analyzer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=' group px-4 py-2 text-base font-medium rounded-lg text-gray-700 hover:text-stone-300 hover:bg-cyan-700 transition duration-500 flex items-center'>
                                        <svg className="h-6 w-6 mr-2 group-hover:rotate-180 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=' group px-4 py-2 text-base font-medium rounded-lg text-gray-700 hover:text-stone-300 hover:bg-cyan-700 transition duration-500 flex items-center'>
                                        <svg className="h-6 w-6 mr-2 group-hover:rotate-180 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Navbar

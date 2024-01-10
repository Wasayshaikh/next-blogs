import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { cookies } from "next/headers"

const Header = () => {
    const [dropDropStatus, setDropDropStatus] = useState<boolean>(false)
    const toggleDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setDropDropStatus(!dropDropStatus)
    }
    useEffect(() => {
        if (dropDropStatus) {
            window.addEventListener('click', () => {
                setDropDropStatus(false)
            });
        }
        return () => {
            window.removeEventListener('click', () => {
                setDropDropStatus(false)
            });
        };
    }, [dropDropStatus]);
    const authToken = false;
    return (
        <>

            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">


                        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
                        {/* <div className="relative">
                            <button onClick={(e) => { toggleDropDown(e) }} type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                                Product

                            </button>


                            <div className={`absolute -left-8 top-full z-10 mt-3   overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 ${dropDropStatus ? '' : 'hidden'}`}  >
                                <div className="p-1">
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                Technology
                                                <span className="absolute inset-0"></span>
                                            </a>
                                          
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                Analytics
                                                <span className="absolute inset-0"></span>
                                            </a>
                                          
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                Analytics
                                                <span className="absolute inset-0"></span>
                                            </a>
                                          
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                Wildlife
                                                <span className="absolute inset-0"></span>
                                            </a>
                                          
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                Travel
                                                <span className="absolute inset-0"></span>
                                            </a>
                                          
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div> */}
                        <Link href="posts" className="text-sm font-semibold leading-6 text-gray-900">Posts</Link>
                        <Link href="authors" className="text-sm font-semibold leading-6 text-gray-900">Authors</Link>
                        <Link href="contact-us" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>
                    </div>
                    {
                        authToken ?
                            <>Logged In</>
                            : <>
                                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex login-btn">
                                        <span className='w-[70%]'>Log in</span>
                                        <span className='flex w-[20%] overflow-hidden arrow'><span aria-hidden="true">&rarr;</span><span aria-hidden="true">&rarr;</span></span></a>
                                </div>
                            </>
                    }

                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <div className="hidden" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>

                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <div className="-mx-3">
                                        <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                            Product
                                        </button>
                                        {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                                        <div className="mt-2 space-y-2" id="disclosure-1">
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
                                            <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
                                        </div>
                                    </div>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                                </div>
                                {
                                     authToken ?
                                        <>Logged In</>
                                        : <>
                                            <div className="py-6">
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                                            </div>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
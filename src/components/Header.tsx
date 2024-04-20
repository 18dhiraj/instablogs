'use client'
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
const Header = () => {

    const router = useRouter()
    const params = useParams()
    const [showNavigation, setShowNavigation] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const onSearchClick = () => {

        if (showSearch) {
            document.body.style.overflow = 'scroll'
        } else {
            window.scrollTo(0, 0)
            document.body.style.overflow = 'hidden'
        }
        setShowSearch(!showSearch)
    }

    console.log(params)

    return (
        <header className={`min-h-[70px] border flex justify-between items-center ${showSearch ? "" : 'fixed'} w-full bg-white top-0 z-10`}>
            <div onClick={() => router.push('/')} className="ml-[3rem] text-[orange] font-bold cursor-pointer" >INSTABLOGS</div>
            <div className="hidden md:flex justify-end flex-1">
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black `} href={'/'}>Home</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'travel' ? "border-black border-b-2" : ""} `} href={'/category/travel'}>Travel</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'technology' ? "border-black border-b-2" : ""} `} href={'/category/technology'}>Technology</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'personal-improvement' ? "border-black border-b-2" : ""} `} href={'/category/personal-improvement'}>Personal Improvment</Link>
                <Link className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black`} href={'/category'}>All categories</Link>
            </div>
            <div onClick={() => setShowNavigation(!showNavigation)} className="md:hidden justify-start flex-1 pl-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            {showNavigation && <div className="block md:hidden  absolute top-[70px] w-[100%] bg-[#fff]">
                <div className="my-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black `} href={'/'}>Home</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'travel' ? "border-black border-b-2" : ""} `} href={'/category/travel'}>Travel</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'technology' ? "border-black border-b-2" : ""} `} href={'/category/technology'}>Technology</Link>
                </div>
                <div className="mb-3">
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black ${params?.category == 'personal-improvement' ? "border-black border-b-2" : ""} `} href={'/category/personal-improvement'}>Personal Improvment</Link>
                </div>
                <div className="mb-3"  >
                    <Link onClick={() => setShowNavigation(!showNavigation)} className={`mx-4 border-[transparent] border-b-2 hover:border-b-2 hover:border-black`} href={'/category'}>All categories</Link>
                </div>
            </div>}
            <div className="mx-[3rem] cursor-pointer">
                <svg onClick={onSearchClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                {showSearch &&
                    <div onClick={onSearchClick} className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] z-20" >
                        <div className="absolute right-[10px] md:right[120px] top-[70px]">
                            <SearchComponent setShowSearch={onSearchClick} />
                        </div>
                    </div>}
            </div>
        </header>
    )
}

export default Header
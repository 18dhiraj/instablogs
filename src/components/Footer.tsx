import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer >
            <div className="bg-[orange]  mt-10 p-2 p-md-10 p-lg-20 " >
                <div className="flex flex-col md:flex-row w-fit m-auto my-10">
                    <Link href={'/category'} className="mx-2 text-sm text-md-md mx-md-10">All categoryies</Link>
                    <Link href={'/category/technology'} className="mx-2 text-sm text-md-md mx-md-10">Techology</Link>
                    <Link href={'/category/travel'} className="mx-2 text-sm text-md-md mx-md-10">Travel</Link>
                    <Link href={'/category/food'} className="mx-2 text-sm text-md-md mx-md-10">Food</Link>
                    <Link href={'/category/health'} className="mx-2 text-sm text-md-md mx-md-10">Health</Link>
                    <Link href={'/category/personal-improvement'} className="mx-2 text-sm text-md-md mx-md-10">Personal Improvement</Link>
                </div>
                <div className="w-full border my-10 " ></div>
                <div className="m-4 text-[12px]">© 2021 Company, Inc</div>
            </div>

        </footer>
    )
}

export default Footer
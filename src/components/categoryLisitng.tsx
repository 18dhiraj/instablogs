"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CategoryListing = (props: any) => {

    const router = useRouter();
    const { e } = props;

    return (
        <div className="mb-5 relative flex justify-center items-center cursor-pointer" onClick={() => router.push(`/category/${e.seo}`)}>
            <Image
                src={e.image}
                className="object-cover max-h-[100px] h-[100px] md:max-h-[200px] md:h-[200px] w-[100%] "
                alt={e.seo}
                width={100}
                height={100}
            />
            <div className=' absolute bottom-[-10px] bg-[orange] px-2 text-[#fff]' >
                {e.name}
            </div>
        </div>
    )
}

export default CategoryListing
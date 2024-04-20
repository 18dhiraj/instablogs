"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListCategoryItem = (props) => {

    let { e } = props
    const router = useRouter()
    return (
        <div className="cursor-pointer m-1.5" onClick={() => router.push(`/category/${e.seo}`)} >
            <Image
                src={e.image}
                alt="category"
                className=" object-cover h-[70px] md:h-[120px] w-[100%] rounded-lg hover:scale-105 hover:rounded-lg ease duration-200 "
                width={200}
                height={100}
            />
            <div className="text-sm mt-2">{e.name}</div>
        </div>
    )
}

export default SideListCategoryItem
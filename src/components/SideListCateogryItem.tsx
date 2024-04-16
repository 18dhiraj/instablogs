"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListCategoryItem = (props) => {

    let { e } = props
    const router = useRouter()
    return (
        <div className="cursor-pointer" onClick={() => router.push(`/category/${e.seo}`)} >
            <Image
                src={e.image}
                alt="category"
                className=" object-cover h-[70px] md:h-[150px] w-[100%] "
                width={100}
                height={100}
            />
            <div>{e.name}</div>
        </div>
    )
}

export default SideListCategoryItem
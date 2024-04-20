"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideListPostItem = (props) => {

    let { e } = props
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/category/${e.category}/${e.seo}`)} className="cursor-pointer m-1.5" >
            <Image
                src={e.image}
                alt="category"
                className=" object-cover h-[70px] md:h-[120px] w-[100%] rounded-lg hover:scale-105 hover:rounded-lg ease duration-200"
                width={200}
                height={100}
            />
            <div>{e.name}</div>
        </div>
    )
}

export default SideListPostItem
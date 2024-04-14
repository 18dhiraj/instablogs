"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePageCard = (data: any) => {

    const router = useRouter();

    const { image, title, summary, category, seo } = data.e

    const navigate = () => {
        router.push(`/category/${category}/${seo}`)
    }

    return (
        <div className={`mb-[10px] ${data.i == 0 ? "" : "border-t-2"} p-10 `}>
            <h1 className="fs-[20px] text-2xl fw-bolder mb-10 cursor-pointer" onClick={navigate} >{title}</h1>
            <div className=" max-h-[400px] cursor-pointer" onClick={navigate} >
                <Image
                    src={image}
                    alt={seo}
                    width={200}
                    height={200}
                    className="object-contain w-full h-[400px]"
                />
            </div>
            <div className="mt-5">
                <p>{summary}</p>
            </div>
        </div>
    )
}
export default HomePageCard
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
        <div className={`py-5 `}>
            <h1 className="fs-[20px] text-lg md:text-2xl fw-bolder mb-5 cursor-pointer" onClick={navigate} >{title}</h1>
            <div className="max-h-[400px] cursor-pointer" onClick={navigate} >
                <Image
                    src={image}
                    alt={seo}
                    width={700}
                    height={400}
                    className="object-cover w-full max-h-[350px] h-[200px] md:h-[350px] rounded-lg"
                />
            </div>
            <div className="mt-5">
                <p className="text-sm md:text-lg">{summary}</p>
            </div>
        </div>
    )
}
export default HomePageCard
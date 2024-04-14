"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Allcategories = (props) => {

    const { e, i } = props;
    const router = useRouter()
    return (
        <div className="h-[200px] w-[300px]" onClick={() => router.push(`/category/${e.seo}`)} >
            <Image
                src={e.image}
                className="object-cover max-h-[180px] h-[180px] w-[100%]"
                alt={e.seo}
                width={100}
                height={180}
            />
            {e.name}
        </div>
    )
}

export default Allcategories
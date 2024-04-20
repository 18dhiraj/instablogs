"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Person {
    seo: string;
    details: string;
    image: string;
    title: string;
    category: string;
}


const MoreLikeThisCard = ({ e }: any) => {

    const router = useRouter();

    const navigate = () => {
        router.push(`/category/${e.category}/${e.seo}`)
    }
    return (
        <div onClick={navigate} className=" mr-10 min-w-[300px] w-[300px] min-w-md-[350px] w-md-[350px]  cursor-pointer   ">
            <Image
                src={e.image}
                alt="more like this"
                className="w-[100%] h-[200px] object-cover rounded-lg"
                width={400}
                height={200}
            />
            <div className="my-3">
                <span className="border-b-2 border-[transparent] w[fit] hover:border-b-2 hover:border-[#000] " >{e.title}</span>
            </div>
        </div>

    )
}


export default MoreLikeThisCard
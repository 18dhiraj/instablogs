// "use client"

import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import app from "@/firebase";
import Allcategories from "@/components/allcategories";

export const getCate = async () => {
    app()
    const db = getFirestore()
    let categoriesQuery = query(collection(db, "categories"), orderBy('name'))
    const categoriesSnapshot = await getDocs(categoriesQuery);
    let _category: any = []
    categoriesSnapshot.forEach((doc) => {
        _category.push({ ...doc.data(), docID: doc.id })
    });

    return { cate: _category }
}

const Category = async () => {

    let { cate } = await getCate()

    let lastAlphabet = ''

    return (
        <div>
            <div className="text-xl py-4">Categories</div>
            {/* <div className="grid gap-4 grid-cols-4" > */}
            <div className="" >
                {
                    cate.map((e, i) => {

                        let firstWord = e.name.charAt(0)
                        if (lastAlphabet == "") {
                            lastAlphabet = firstWord
                            return (<>
                                <div className="my-5 text-xl text-blue underline">{firstWord}</div>
                                <Allcategories e={e} i={i} />
                            </>)
                        }
                        else if (firstWord == lastAlphabet) {
                            return <Allcategories e={e} i={i} />
                        } else {
                            lastAlphabet = firstWord
                            return (
                                <>
                                    <div className="my-5  text-xl text-blue underline">{firstWord}</div>
                                    <Allcategories e={e} i={i} />
                                </>
                            )

                        }
                    })
                }
            </div>
        </div >

    )
}

export default Category
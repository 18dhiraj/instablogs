import React from "react";
import Footer from "@/components/Footer";
import HomePageCard from "@/components/HomepageCard";
import { getDocs, collection, getFirestore, limit, query } from "firebase/firestore";
import app from "@/firebase";
import CategoryListing from "@/components/categoryLisitng";
import RightSection from "@/components/RightSection";
import getPaginationData from '@/utils/hooks'

const getData = async () => {
  app()
  const db = getFirestore()
  const postsQuery = query(collection(db, "posts"), limit(8));
  const querySnapshot = await getDocs(postsQuery);

  const categoriesQuery = query(collection(db, 'categories'), limit(3))
  const categoriesSnapshot = await getDocs(categoriesQuery);
  let _posts: any = []
  let _category: any = []
  querySnapshot.forEach((doc) => {
    _posts.push({ ...doc.data(), docID: doc.id })
  });
  categoriesSnapshot.forEach((doc) => {
    _category.push({ ...doc.data(), docID: doc.id })
  });

  return { posts: _posts, cate: _category ,  }
}

export default async () => {

  let { posts, cate }: any = await getData();

  // setTimeout(() => {
  //   getPaginationData(6).then((res) => {
  //     console.log(JSON.stringify(res))
  //   })
  // }, 2000)

  return (
    <div className="pt-10 px-4" >
      <div className="grid grid-cols-3 gap-[10px] md:gap-[20px]">
        <div className="col-span-2">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-4" >
            {cate.map((e: any, i: number) => <CategoryListing e={e} i={i} />)}
          </div>
          <div>
            {posts.map((e: any, i: number) => <HomePageCard e={e} i={i} />)}
          </div>
        </div>
        <div className="col-span-1" >
          <RightSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const revalidate = 100;

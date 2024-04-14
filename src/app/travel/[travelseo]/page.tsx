import Image from "next/image";
import MoreLikeThisCard from "@/components/MoreLikeThisCard";
import Footer from "@/components/Footer";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from "@/firebase";

export const getdata = async (seo: string) => {
    app()
    const db = getFirestore()
    const q = query(collection(db, "posts"), where("seo", "==", seo));
    const querySnapshot = await getDocs(q);
    let _posts: any = []
    querySnapshot.forEach((doc) => _posts.push({ ...doc.data(), docID: doc.id }));
    const moreQ = query(collection(db, "posts"), where("category", "==", _posts[0].category));
    const moreData = await getDocs(moreQ);
    let _more: any = []
    moreData.forEach((doc) => _more.push({ ...doc.data(), docID: doc.id }));
    return { posts: _posts, more: _more }
}

export default async function (props: any) {

    const { params } = props
    let items = [1, 3, 4, 5, 6, 6, 7, 8, 8]

    let detailss = await getdata(params.travelseo)
    let details = detailss.posts[0]
    let moreLike = detailss.more


    return (
        <div className="p-0 p-md-10 pt-1">
            <h1 className="fs-[20px] text-2xl fw-bolder my-10" >{details.title}</h1>
            <div className="border max-h-[400px]" >
                <Image
                    src={details.image}
                    alt="taj mahal"
                    className="object-cover w-full h-[400px]"
                    width={700}
                    height={400}
                />
            </div>
            <div className="my-4">
                {details.summary}
            </div>
            <div>
                {details?.description}
            </div>
            <div>
                <h1 className="fs-[20px] text-2xl fw-bolder my-10 " >More like this</h1>
                <div className="flex overflow-x-scroll">
                    {moreLike.map((e) => {
                        return <MoreLikeThisCard e={e} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
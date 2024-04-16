import Image from "next/image";
import MoreLikeThisCard from "@/components/MoreLikeThisCard";
import Footer from "@/components/Footer";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from "@/firebase";
import RightSection from "@/components/RightSection";

const getdata = async (seo: string) => {

    app()
    const db = getFirestore();
    const q = query(collection(db, "posts"), where("seo", "==", seo));
    const querySnapshot = await getDocs(q);
    let _posts: any = []
    querySnapshot.forEach((doc) => {

        _posts.push({ ...doc.data(), docID: doc.id })
    });

    const moreQ = query(collection(db, "posts"), where("category", "==", _posts[0].category));
    const moreData = await getDocs(moreQ);
    let _more: any = []
    moreData.forEach((doc) => _more.push({ ...doc.data(), docID: doc.id }));
    return { posts: _posts, more: _more }
}

const Details = async (props: any) => {

    const { params } = props
    let detailss = await getdata(params.seo)
    let details = detailss.posts[0]
    let moreLike = detailss.more;

    return (
        <div className="pr-2 pl-5 p-md-10 pt-1">
            <div className="grid grid-cols-4 md:grid-cols-3 gap-[20px] md:gap-[80px] mt-10">
                <div className=" col-span-3 md:col-span-2">
                    <h1 className="fs-[20px] text-2xl fw-bolder mb-10" >{details.title}</h1>
                    <div className=" max-h-[400px]" >
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
                </div>
                <div className="col-span-1" >
                    <RightSection />
                </div>
            </div>
            <div>
                <h1 className="fs-[20px] text-2xl fw-bolder my-10 " >More like this</h1>
                <div className="flex overflow-x-scroll">
                    {moreLike.map((e: any) => {
                        return <MoreLikeThisCard e={e} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details
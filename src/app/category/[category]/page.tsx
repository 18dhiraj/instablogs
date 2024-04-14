import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import Footer from "@/components/Footer";
import HomePageCard from "@/components/HomepageCard";
import app from "@/firebase";

const getdata = async (cate: string) => {
    app()
    const db = getFirestore()
    let q = query(collection(db, 'posts'), where('category', "==", cate))
    const querySnapshot = await getDocs(q);
    let _posts: any = []
    querySnapshot.forEach((doc) => _posts.push({ ...doc.data(), docID: doc.id }));
    return { props: _posts }
}

export default async function (repo: any) {

    let posts = await getdata(repo.params.category)
    return (
        <div className="pt-10" >
            {
                posts.props.map((e: any, i: number) => <HomePageCard e={e} i={i} />)
            }
            <Footer />
        </div>
    );
}

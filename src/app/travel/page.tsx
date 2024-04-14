import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import Footer from "@/components/Footer";
import HomePageCard from "@/components/HomepageCard";
import app from "@/firebase";
type Repo = {
    name: string
    stargazers_count: number
}

export const getdata = async () => {
    app()
    const db = getFirestore()
    let q = query(collection(db, 'posts'), where('category', "==", "travel"))
    const querySnapshot = await getDocs(q);
    let _posts: any = []
    querySnapshot.forEach((doc) => _posts.push({ ...doc.data(), docID: doc.id }));
    return { props: _posts }
}

export default async function ({ repo }: any) {

    let posts = await getdata()
    return (
        <div className="pt-10" >
            {
                // JSON.stringify(posts)
                posts.props.map((e) => {
                    return (
                        <HomePageCard e={e} />
                    )
                })
            }
            <Footer />
        </div>
    );
}

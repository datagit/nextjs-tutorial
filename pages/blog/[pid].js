import { useRouter } from 'next/router'
import Layout from "../../components/Layout";

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <Layout>
            <div>
                <h1>Post pid={pid}</h1>
            </div>
        </Layout>
    )
}

export default Post;
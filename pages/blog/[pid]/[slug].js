import { useRouter } from 'next/router'
import Layout from "../../../components/Layout";

const PostDetail = () => {
    const router = useRouter()
    const { pid, slug } = router.query

    return (
        <Layout>
            <div>
                <h1>PostDetail pid={pid}, slug={slug}</h1>
            </div>
        </Layout>
    )
}

export default PostDetail;
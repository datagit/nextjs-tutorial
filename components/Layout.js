import Head from 'next/head'
import Navbar from "./Navbar";
const Layout = (props) => (
    <main>
        <Head>
            <title>BitsPrice</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Navbar/>
        <div className='container'>{props.children}</div>
    </main>
);
export default Layout;
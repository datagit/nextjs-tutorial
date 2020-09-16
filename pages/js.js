import React, { useState } from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout';

//const fetcher = url => fetch(url).then(r => r.json())
const fetcher = (...args) => fetch(...args).then(res => res.json());
const Js = () => {
    const [updated, setUpdated] = useState('');



    // call custom hook
    const { data, error } = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json', fetcher);
    function clickMe() {
        console.log('JS');
        setUpdated(data.time.updated);
        console.log(updated);
    }
    return (
        <Layout>
            <div>
                <h1>client side rendering fetching data</h1>
                <div>{updated}</div>
                <button onClick={clickMe}>Click Me call ajax</button>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    // `getStaticProps` is invoked on the server-side,
    // so this `fetcher` function will be executed on the server-side.
    const posts = await fetcher('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log('getStaticProps');
    console.log(posts);
    return { props: { posts } }
}

export default Js;
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';
import Prices2 from '../components/Prices2';
const Index = (props) => (
    <Layout>
        <div>
            <h1 style={{color:'#6E6E6E'}}>BitsPrice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices2 bpi={props.bpi}/>
        </div>
    </Layout>
);

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     const data = await res.json();
//     console.log('getInitialProps: DATA >>');
//     console.log(data.bpi);
//     return {
//         bpi: data.bpi
//     };
// }


//This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    console.log('getServerSideProps');
    console.log(data);
    // Pass data to the page via props
    return { props: data }
}


export default Index;

import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import MyRedirect from '../components/MyRedirect';

//import Prices from '../components/Prices';
import Prices2 from '../components/Prices2';
import StyleJsxOne from "../components/StyleJsxOne";
const Index = (props) => (
    <Layout>
        <div>
            <h1 style={{color:'#6E6E6E'}}>BitsPrice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices2 bpi={props.bpi}/>
            <h1>config on server(CIRCLE_NODE_TOTAL): {process.env.CIRCLE_NODE_TOTAL}</h1>
            <h1>config on server(WRONG2): {process.env.WRONG2}</h1>
            <h1>process.env.ENV_NAME={process.env.ENV_NAME}</h1>
            <StyleJsxOne/>
            <MyRedirect/>
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
    //only run at server side
    //debugger;
    console.log("ENV_NAME=" + process.env.ENV_NAME);
    // console.log(process.env.CIRCLE_NODE_TOTAL);
    // console.log(process.env.DB_HOST);
    // console.log(process.env.WRONG);

    // Fetch data from external API
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()
    // Pass data to the page via props
    return { props: data }
}

export default Index;

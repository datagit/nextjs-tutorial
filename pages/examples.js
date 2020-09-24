import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import AntDesignExamples from "../components/AntDesignExamples";
import ReactHookFormExamples from "../components/ReactHookFormExamples";
import FilterableProductTable from '../components/FilterableProductTable';
const Examples = (props) => {
    // console.log('at CSR ');
    // console.log(props);
    return (
        <Layout>
            {/* <div>
                <AntDesignExamples/>
            </div>
            <div>
                <ReactHookFormExamples/>
            </div> */}
            <div>
                <FilterableProductTable/>
            </div>
        </Layout>
    );
}

//This gets called on every request
export async function getServerSideProps(appContext) {
    //only run at server side
    //debugger;
    console.log("at SSR ENV_NAME=" + process.env.ENV_NAME);
    // console.log(process.env.CIRCLE_NODE_TOTAL);
    // console.log(process.env.DB_HOST);
    // console.log(process.env.WRONG);

    // Fetch data from external API
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()
    // Pass data to the page via props
    return { props: data }
}

export default Examples;

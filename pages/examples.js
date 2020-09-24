import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import AntDesignExamples from "../components/AntDesignExamples";
import ReactHookFormExamples from "../components/ReactHookFormExamples";
import FilterableProductTable from '../components/FilterableProductTable';

import { area, circumference } from '../utility/common';
import Cat from '../utility/cat';

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
                <FilterableProductTable />
            </div>
        </Layout>
    );
}

//This gets called on every request
export async function getServerSideProps(appContext) {
    const circle = require('../utility/common');

    const r = 3;
    console.log(`Circle with radius ${r} has
    area: ${circle.area(r)};
    circumference: ${circle.circumference(r)}`);

    console.log(`Circle with radius ${r} has
  area: ${area(r)};
  circunference: ${circumference(r)}`);


    // const Cat = require('../utility/cat');
    const cat = new Cat();
    console.log(cat.makeSound());


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

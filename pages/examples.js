import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import AntDesignExamples from "../components/AntDesignExamples";
import ReactHookFormExamples from "../components/ReactHookFormExamples";
import FilterableProductTable from '../components/FilterableProductTable';
import Wrapper from '../components/Wrapper';
const Examples = (props) => (
    <Layout>
        {/* <div>
            <AntDesignExamples/>
        </div>
        <div>
            <ReactHookFormExamples/>
        </div> */}
        <div>
            <FilterableProductTable/>
            <Wrapper/>
        </div>
    </Layout>
);

export default Examples;

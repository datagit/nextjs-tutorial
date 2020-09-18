import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import AntDesignExamples from "../components/AntDesignExamples";
import ReactHookFormExamples from "../components/ReactHookFormExamples";
const Examples = (props) => (
    <Layout>
        <div>
            <AntDesignExamples/>
        </div>
        <div>
            <ReactHookFormExamples/>
        </div>
    </Layout>
);

export default Examples;

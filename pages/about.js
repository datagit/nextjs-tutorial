import React, {useState} from "react";
import Layout from '../components/Layout';
import {Button}  from 'antd';

const About = () => {
    const {loadings, setLoadings} = useState([]);
    function handleClick () {
        console.log('handleClick');
    };
    function enterLoading(index) {
        setLoadings(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings
            };
        });
        setTimeout(() => {
            setLoadings(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings
                };
            });
        }, 6000);
    };
    return (
        <Layout>
            <div>
                <h1>About BitsPrice</h1>
                <Button type="primary" onClick={handleClick}>Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" loading>
                    Loading
                </Button>
                {/*<Button*/}
                {/*    type="primary"*/}
                {/*    loading={loadings[0]}*/}
                {/*    onClick={() => enterLoading(0)}*/}
                {/*>*/}
                {/*    Click me!*/}
                {/*</Button>*/}
            </div>
        </Layout>
    );
}

export default About;
import React from "react";
import Layout from '../components/Layout';
import {Button}  from 'antd';

const About = () => {
    function handleClick() {
        console.log('handleClick');
    }
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
            </div>
        </Layout>
    );
}

export default About;
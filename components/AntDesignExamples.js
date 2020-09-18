import React, {useState} from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PoweroffOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {
    SyncOutlined,
} from '@ant-design/icons';



class AntDesignExamples extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };
    render() {
        const { loadings } = this.state;
        console.log(loadings);
        return (
            <div>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                    Click me!
                </Button>
                <SyncOutlined spin />
                <div>
                    Hello world.{' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default AntDesignExamples;
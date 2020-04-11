import React from 'react'
import {Breadcrumb} from "antd";


export default class RecordDetail extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>上课记录</Breadcrumb.Item>
                    <Breadcrumb.Item>编辑上课记录</Breadcrumb.Item>
                </Breadcrumb>

            </div>
        )
    }
}
import React from 'react'
import {Breadcrumb, Card, List, Avatar} from "antd";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
export default class CommentDetail extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>课堂评价</Breadcrumb.Item>
                    <Breadcrumb.Item>评价详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="list-loadmore-more">删除</a>]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}
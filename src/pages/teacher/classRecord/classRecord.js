import React from 'react'
import { Statistic, Row, Col, Card, List } from 'antd';


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
export default class ClassRecord extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Card>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="我的课程" value={8} suffix={' 个'} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="待处理课程" value={3} suffix={'个'} />
                        </Col>
                        <Col span={8}>
                            <Statistic title="本周已上课程" value={3} suffix={'节'} />
                        </Col>
                    </Row>
                </Card>
                <br/>
                <br/>
                <Card>
                    <List
                        header={<h1>我的课程</h1>}
                        size={'large'}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="list-loadmore-edit" href={'/#/teacherPage/recordDetail'}>编辑上课记录</a>]}
                            >
                                <List.Item.Meta
                                    title={<a href={'/#/teacherPage/recordDetail'}>{item.title}</a>}
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
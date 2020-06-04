import React from 'react'
import {Breadcrumb, Button, Card, Col, List, Row, Radio, Input} from "antd";


export default class RecordDetail extends React.Component {

    state = {
        stuList: [
            {nickname: "张浩"},
            {nickname: "友槐"},
            {nickname: "茅姝丽"},
            {nickname: "艾凡霜"},
            {nickname: "碧千柔"},
            {nickname: "德骏伟"},

        ]
    };

    render() {
        const {stuList} = this.state
        return (
            <div>
                <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>上课记录</Breadcrumb.Item>
                    <Breadcrumb.Item>编辑上课记录</Breadcrumb.Item>
                </Breadcrumb>

                <Card>
                    <List
                        header={
                            <Row>
                                <Col span={8}>
                                    学生名称
                                </Col>
                                <Col span={10}>
                                    上课状态
                                </Col>
                                <Col span={6}>
                                    备注
                                </Col>
                            </Row>

                        }
                        footer={
                            <div style={{textAlign: "right"}}>
                                <Button type={"primary"}>确认</Button>
                            </div>

                        }
                        itemLayout="horizontal"
                        dataSource={stuList}
                        renderItem={item => (
                            <List.Item>
                                <span>{item.nickname}</span>
                                <Radio.Group name={item.nickname} defaultValue="a" size="small"
                                             onChange={(index) => console.log(index)}>
                                    <Radio.Button value="a">已到</Radio.Button>
                                    <Radio.Button value="c">迟到</Radio.Button>
                                    <Radio.Button value="d">请假</Radio.Button>
                                    <Radio.Button value="b">未到</Radio.Button>
                                </Radio.Group>
                                <Input placeholder="备注"
                                       style={{width: 300}}
                                       id={item.id}
                                       onChange={e => {
                                           console.log(e.target.id);
                                           let data = this.state.student;
                                           data.map(item => {
                                               if (e.target.id === item.title) {
                                                   item.value = e.target.value;
                                                   this.setState({
                                                       student: data
                                                   })
                                               }
                                               return null
                                           })
                                       }}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}

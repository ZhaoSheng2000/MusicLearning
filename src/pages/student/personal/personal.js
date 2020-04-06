import React from 'react'
import {Avatar, Typography, Statistic, Card, Progress} from 'antd';
import {
    LikeOutlined,
    ClockCircleOutlined,
    CommentOutlined
} from '@ant-design/icons';

import './personal.less'

import {Col, Row} from "antd";

const {Title, Paragraph, Text} = Typography;


export default class Personal extends React.Component {

    state = {
        course:[1,2,3,4,5,6]
    };

    render() {
        return (
            <div>
                <div className='top-bg'>
                    <Row gutter={16}>
                        <Col span={4}>
                            <div style={{textAlign: 'center', paddingTop: 40}}>
                                <Avatar size={100}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </div>
                        </Col>
                        <Col span={10}>
                            <div style={{paddingTop: 70}}>
                                <Title style={{color: "white"}}>郑州轻工业大学</Title>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div style={{paddingTop: 60}}>
                                <Statistic valueStyle={{color: "white"}}
                                           title={<Title level={3} style={{color: "white"}}>回复</Title>} value={4}
                                           prefix={<CommentOutlined/>}/>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div style={{paddingTop: 60}}>
                                <Statistic valueStyle={{color: "white"}}
                                           title={<Title level={3} style={{color: "white"}}>点赞</Title>} value={1128}
                                           prefix={<LikeOutlined/>}/>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div style={{paddingTop: 60}}>
                                <Statistic valueStyle={{color: "white"}}
                                           title={<Title level={3} style={{color: "white"}}>学习进度</Title>} value={"93%"}
                                           prefix={<ClockCircleOutlined/>}/>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Title level={3} style={{paddingTop:30}}>我的课程</Title>
                    <Row>
                        <Col span={18}>
                            {
                                this.state.course.map((name,index)=>{
                                    return(
                                        <Card hoverable key={index}>
                                            <Row gutter={16}>
                                                <Col span={8}>
                                                    <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                                </Col>
                                                <Col span={8}>
                                                    <Title level={4}>XXX{name}课程</Title>
                                                    <Paragraph>
                                                        XXX老师
                                                    </Paragraph>
                                                    <Text>已学课时</Text><br/>
                                                    <Progress style={{width:200}} percent={80} />
                                                </Col>
                                                <Col span={8}>
                                                    <Title level={4}>上课时间</Title>
                                                    <Text type={"warning"}>
                                                        周一至周五14：00--16：00
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
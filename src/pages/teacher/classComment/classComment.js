import React from 'react'
import {Button, Card, Col, Progress, Row, Typography} from "antd";

const {Title, Paragraph, Text} = Typography;

export default class ClassComment extends React.Component {

    state = {course:[1,2,3,4,5,6,7]};

    render() {
        return (
            <div>
                <Title level={3}>我的课程</Title>
                <Row gutter={[16,16]}>
                    <Col span={22}>
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
                                                <br/>
                                                <br/>
                                                <Text>已上课时</Text><br/>
                                                <Progress style={{width:200}} percent={80} />
                                            </Col>
                                            <Col span={8}>
                                                <Title level={4}>上课时间</Title>
                                                <Text type={"warning"}>
                                                    周一至周五14：00--16：00
                                                </Text>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <div>
                                                    <Button type={"primary"}>查看评价</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}
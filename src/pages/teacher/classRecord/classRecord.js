import React from 'react'
import {Statistic, Row, Col, Card, Typography, Progress, Button} from 'antd';

const {Title, Text} = Typography;

export default class ClassRecord extends React.Component {

    state = {course: [1, 2, 3, 4, 5, 6, 7]};

    onDetail=()=>{
        this.props.history.push('/teacherPage/recordDetail')
    }

    render() {
        return (
            <div>
                <Card>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="我的课程" value={8} suffix={' 个'}/>
                        </Col>
                        <Col span={8}>
                            <Statistic title="待处理课程" value={3} suffix={'个'}/>
                        </Col>
                        <Col span={8}>
                            <Statistic title="本周已上课程" value={3} suffix={'节'}/>
                        </Col>
                    </Row>
                </Card>
                <Title level={3} style={{paddingTop:10}}>我的课程</Title>
                <Row gutter={[16, 16]}>
                    <Col span={22}>
                        {
                            this.state.course.map((name, index) => {
                                return (
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
                                                <Progress style={{width: 200}} percent={80}/>
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
                                                    <Button type={"primary"} onClick={this.onDetail}>编辑上课记录</Button>
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
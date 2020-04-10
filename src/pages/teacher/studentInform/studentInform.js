import React from 'react'
import {Card, Col, Row,Avatar, Statistic} from "antd";

const { Meta } = Card;

export default class StudentInform extends React.Component {

    state = {
        student:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    };

    onDetail=()=>{
        this.props.history.push('/teacherPage/studentDetail')
    }

    render() {
        return (
            <div>
                <Row gutter={[24,16]}>
                    {
                        this.state.student.map((name,index)=>{
                            return(
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={this.onDetail}
                                        hoverable
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={`学生${name}`}
                                            description={
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Statistic title="上课次数" value={name} />
                                                    </Col>
                                                    <Col span={12}>
                                                        <Statistic title="出勤率" value={95} suffix="%"  />
                                                    </Col>
                                                </Row>
                                            }
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                 ]
                </Row>
            </div>
        )
    }
}
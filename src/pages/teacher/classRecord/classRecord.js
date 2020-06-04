import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Row, Col, Card, Typography, Progress, Button} from 'antd';
import Cookies from 'js-cookie'

import {receivedTeacherCourse} from "../../redux/actions";

const {Title, Text} = Typography;

class ClassRecord extends React.Component {

    state = {course: [1, 2, 3, 4, 5, 6, 7]};
    componentDidMount() {
        const id = Cookies.get("userId");
        this.props.receivedTeacherCourse(id);
    }
    onFeedback=(id,tea_id)=>{
        this.props.history.push({pathname:'/teacherPage/classFeedback',state:{id:id,tea_id:tea_id}})
    }
    onDetail =()=>{
     this.props.history.push('/teacherpage/recordDetail')
    }

    render() {
        const{teacherCourse} = this.props.teacherCourse;
        console.log(teacherCourse);
        return (
            <div>
                <Card>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="我的课程" value={teacherCourse.length} suffix={' 个'}/>
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
                            teacherCourse.map((name, index) => {
                                return (
                                    <Card  key={index}>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                            </Col>
                                            <Col span={8}>
                                                <Title level={4}>{name.course_title}</Title>
                                                <br/>
                                                <br/>
                                                <Text>已上课时</Text><br/>
                                                <Progress style={{width: 200}} percent={80}/>
                                            </Col>
                                            <Col span={8}>
                                                <Title level={4}>上课时间</Title>
                                                <Text type={"warning"}>
                                                    {name.course_start_time}——{name.course_end_time}
                                                </Text>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <div>
                                                    <Button type={"primary"} onClick={this.onDetail}>编辑上课记录</Button>
                                                    &nbsp;&nbsp;
                                                    <Button type={"primary"} onClick={()=>this.onFeedback(name.id,name.tea_id)}>查看课下反馈</Button>
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
export default connect(
    state=>({teacherCourse:state.teacherCourse}),{receivedTeacherCourse}
)(ClassRecord)
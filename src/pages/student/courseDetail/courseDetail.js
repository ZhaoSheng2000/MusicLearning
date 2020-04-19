import React from 'react'
import {connect} from 'react-redux'
import {Col, Row, Typography, Breadcrumb, Button, Tabs, Card, Avatar,List,message} from "antd";

import {
    RadarChartOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';

import {receivedTheTeacher,receivedTeacherCourse} from "../../redux/actions";
import Cookies from 'js-cookie';

import {reqaddCourse} from "../../../api";

const {Title, Text,Paragraph} = Typography;
const {TabPane} = Tabs;


class CourseDetail extends React.Component {

    state = {

    };
    onConfirm=(id,class_teacher)=>{
        const stu_id = Cookies.get("userId");
        reqaddCourse(id,class_teacher,stu_id).then(r=>{
            if(r.data.error_code===3005){
                message.success('参加课程成功！');
            }
        })
    };

    onTeacherDetail=(id)=>{
        console.log(typeof id);
        this.props.receivedTheTeacher(id);
        this.props.receivedTeacherCourse(id);
        this.props.history.push('/teacherDetail')

}


    render() {
        const {courseDetail} = this.props.courseDetail;
        const {courseReview} = this.props.courseReview;
        console.log(courseDetail);

        return (
            <div>
                <div style={{paddingLeft: 30, backgroundColor: "white", height: 400}}>
                    <div>
                        <Breadcrumb separator=">" style={{paddingTop: 20, paddingBottom: 20}}>
                            <Breadcrumb.Item href={'/#/allcourse'}>课程</Breadcrumb.Item>
                            <Breadcrumb.Item>课程详情</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col span={11}>
                            <img alt="course" src="https://s1.ax1x.com/2020/04/02/GYYhPs.jpg"/>
                        </Col>
                        <Col span={12}>
                            <Title level={3}>{courseDetail.course_title}</Title>
                            <Text type="secondary">开课时间：{courseDetail.course_start_time}——{courseDetail.course_end_time}</Text>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Text type="warning">已有{courseDetail.signin}人参加</Text>
                            <br/>
                            <br/>
                            <Button type="primary" size={"large"} onClick={()=>this.onConfirm(courseDetail.id,courseDetail.class_teacher)}>立即参加</Button>
                        </Col>
                    </Row>
                </div>

                <div style={{paddingTop: 50}}>
                    <Row gutter={16}>
                        <Col span={18}>
                            <Card>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="课程详情" key="1">
                                        <Card style={{backgroundColor:"beige"}}>
                                            <Text>
                                                {courseDetail.course_content}
                                            </Text>
                                        </Card>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <Title level={4}> <RadarChartOutlined/>  课程概述</Title>
                                        <Paragraph>
                                            流行音乐包含各种风格和流派，无论是欣赏还是实践，都需具备内行式的音乐知识、技巧和审美能力；而且，流行音乐也是最具互动性、参与性和在场感的音乐类型，只有身陷其中才能真正领悟它的奥妙。所以，这门课程的设计初衷也希望符合流行音乐这一属性——它将把你拖入一个浸入式的活态音乐现场。在那里，流行音乐将开口讲话。
                                        </Paragraph>
                                        <Paragraph>
                                            课程框架以流行音乐的分类学知识为基础——早期艺术化流行歌曲、布鲁斯、爵士乐、摇滚乐、拉丁音乐和中国当代流行音乐等风格将悉数登场亮相。在“早期艺术化流行歌曲”一章中，我们会为同学们依次介绍早期的单页歌谣、客厅歌曲，以及代表着流行音乐产业化的叮砰巷歌曲；著名歌唱家王高鹏老师，会给那些拥有磁性嗓音的低吟歌手们进行“诊断”；王老师还将现身说法，教同学们演唱一批经典的歌曲。
                                        </Paragraph>
                                        <Paragraph>
                                            布鲁斯是非常重要的美国黑人流行音乐。我们将拿出三节课专门讨论布鲁斯在发展过程中的不同风格——乡村布鲁斯、古典布鲁斯和节奏布鲁斯，通过现场示范，三种风格的特征和差异便一目了然；我们还会教大家如何弹奏和分析布鲁斯音乐。
                                        </Paragraph>
                                        <Paragraph>
                                            在“爵士乐”一章中，尹伟老师将面对面教大家如何欣赏和演奏ragtime；另外，早期的新奥尔良爵士、摇摆乐、bebop和fusion等音乐风格的来龙去脉和基本特征也会跃然于荧幕；我们还将用一节课的时间，教大家怎样找到swing的感觉。
                                        </Paragraph>
                                        <Paragraph>
                                            摇滚乐是大家非常熟悉但又十分复杂的音乐风格。它的发展迅猛，风格流变更迭频仍，让人目不暇接。因此，我们将捋顺摇滚乐的风格变迁史。如猫王和Bill Haley等早期音乐家的风格；The Beatles的音乐创作；还会通过一种“做实验”的方式，感受重金属音乐的能量与热度。
                                        </Paragraph>
                                        <Paragraph>
                                            拉丁音乐具有独特的形态和异域风情。这一章，著名钢琴家罗宁老师将手把手教大家打古巴音乐的节奏；我们还会讲如何用吉他和歌声拿捏巴西bossa nova的感觉。
                                        </Paragraph>
                                        <Paragraph>
                                            最后一章叫做“DIY你的音乐生活”，众多优秀的音乐老师将面对面教你如何写歌，如何建立你自己的音乐工作室，以及如何运用更科学的方法与技巧去歌唱。
                                        </Paragraph>
                                        <Paragraph>
                                            相信这门课程能够达到你自己通过单纯阅读收获不到的效果。循序渐进，快乐学完，你一定能够轻松“玩转”流行音乐。
                                        </Paragraph>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <Title level={4}> <InfoCircleOutlined />  授课目标</Title>
                                        <p>
                                            1.理解流行音乐发展的来龙去脉和演变进程，完善流行音乐的理论与知识结构，提高流行音乐批评、审美和实践的能力，指导社会文化生活中对流行音乐的评判和甄别。
                                        </p>

                                        <p>
                                            2.通过众音乐家的现场示范和“解剖”，直面流行音乐内部，轻松抵达音乐世界的中心地带，掌握构成各种音乐风格的相关技术和知识要点。
                                        </p>
                                        <p>
                                            3.掌握作曲、写词、唱歌、弹琴、编曲的基本方法和技巧，DIY你的音乐生活。
                                        </p>

                                    </TabPane>
                                    <TabPane tab={`课程评价 ${courseReview.length} `} key="2">
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={courseReview}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                        description={item.evaluation}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                </Tabs>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="授课老师" bordered={false}>
                                <a onClick={()=>this.onTeacherDetail(courseDetail.class_teacher)}>
                                    <Avatar size={64}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                    {courseDetail.teausername}
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({courseDetail: state.courseDetail,courseReview: state.courseReview}),{receivedTheTeacher,receivedTeacherCourse}
)(CourseDetail)
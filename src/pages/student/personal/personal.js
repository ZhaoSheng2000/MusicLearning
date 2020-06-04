import React from 'react'
import {connect} from 'react-redux'
import {Avatar, Typography, Statistic, Card, Button,Col, Row, Modal, Input,message} from 'antd';
import {
    ClockCircleOutlined,
    CommentOutlined
} from '@ant-design/icons';

import {userInfo,receiveMyCourse} from "../../redux/actions";

import './personal.less'
import Cookies from "js-cookie";
import axios from 'axios'
import {reqMyCourse} from "../../../api"

const { TextArea } = Input;
const {Title, Paragraph, Text} = Typography;


class Personal extends React.Component {

    state = {
        mycourse: [],
        visible: false,
        confirmLoading: false,
        confirmLoading2:false,
        visible2:false,
        value: '',
        value2: '',

    };
    componentDidMount() {
        const userId = Cookies.get("userId");
        this.props.userInfo(userId);
        reqMyCourse(userId).then(res =>{
            const mycourse = res.data.data
            this.setState({mycourse})
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    };

    handleOk = (course_id,tea_id) => {
        this.setState({
            confirmLoading: true,
        });
        const {value} = this.state;
        const userId = Cookies.get("userId");
        if (value===''){
            message.warning('问题不能为空！');
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }
        else {
            axios.post('/stu/addFeedback', {
                course_id:course_id,
                tea_id:tea_id,
                stu_id:userId,
                feedback:value
            }).then(r=>{
                if (r.data.error_code===3007){
                    this.setState({
                        visible: false,
                        confirmLoading: false,
                    });
                    message.success('提问成功！')
                }
            })

        }
    };

    handleOk2 = (course_id,tea_id) => {
        this.setState({
            confirmLoading2: true,
        });
        const {value2} = this.state;
        const userId = Cookies.get("userId");
        if (value2===''){
            message.warning('评价不能为空！');
            this.setState({
                visible2: false,
                confirmLoading2: false,
            });
        }
        else {
            console.log(value2)
            axios.post('/stu/addEvaluation', {
                course_id:course_id,
                tea_id:tea_id,
                stu_id:userId,
                evaluation:value2
            }).then(r=>{
                if (r.data.error_code===3009){
                    this.setState({
                        visible2: false,
                        confirmLoading2: false,
                    });
                    message.success('添加课程评价成功！')
                }
            })

        }
    };


    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    handleCancel2 = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible2: false,
        });
    };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    onChange2 = ({ target: { value } }) => {
        this.setState({ value2:value });
    };
    render() {
        const { visible, confirmLoading,value ,confirmLoading2,visible2,value2} = this.state;

        const {userinfo} = this.props.userinfo;
        const myCourse = this.state.mycourse
        return (
            <div>
                <div className='top-bg'>
                    <Row gutter={16}>
                        <Col span={4}>
                            <div style={{textAlign: 'center', paddingTop: 10}}>
                                <Avatar size={64}
                                        src={userinfo.picture}/>
                            </div>
                        </Col>
                        <Col span={10}>
                            <div style={{paddingTop: 30}}>
                                <Title level={3} style={{color: "white"}}>{userinfo.nickname}</Title>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div style={{paddingTop: 10}}>
                                <Statistic valueStyle={{color: "white"}}
                                           title={<Title level={4} style={{color: "white"}}>回复</Title>} value={4}
                                           prefix={<CommentOutlined/>}/>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div style={{paddingTop: 10}}>
                                <Statistic valueStyle={{color: "white"}}
                                           title={<Title level={4} style={{color: "white"}}>学习进度</Title>} value={"83%"}
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
                                myCourse.map((name,index)=>{
                                    return(
                                        <Card  key={index}>
                                            <Row gutter={16}>
                                                <Col span={8}>
                                                    <div style={{whith:510}}>
                                                        <img alt='course' src={name.img}/>
                                                    </div>
                                                </Col>
                                                <Col span={8}>
                                                    <Title level={4}>{name.course_title}课程</Title>
                                                    <br/>
                                                    <Paragraph>
                                                        {name.teausername}
                                                    </Paragraph>
                                                </Col>
                                                <Col span={8}>
                                                    <Title level={4}>上课时间</Title>
                                                    <Text type={"warning"}>
                                                        {name.course_start_time}——
                                                        {name.course_end_time}
                                                    </Text>
                                                    <br/>
                                                    <br/>
                                                    <div>
                                                        <Button type={"primary"} onClick={this.showModal}>课程反馈</Button>&nbsp;
                                                        <Button type={"primary"} onClick={this.showModal2}>评价课程</Button>
                                                        <Modal
                                                            title="提问老师"
                                                            visible={visible}
                                                            onOk={()=>this.handleOk(name.id,name.class_teacher)}
                                                            confirmLoading={confirmLoading}
                                                            onCancel={this.handleCancel}
                                                        >
                                                            <TextArea
                                                                value={value}
                                                                onChange={this.onChange}
                                                                placeholder="请输入您的问题"
                                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                                            />
                                                        </Modal>

                                                        <Modal
                                                            title="评价课程"
                                                            visible={visible2}
                                                            onOk={()=>this.handleOk2(name.id,name.class_teacher)}
                                                            confirmLoading={confirmLoading2}
                                                            onCancel={this.handleCancel2}
                                                        >
                                                            <TextArea
                                                                value={value2}
                                                                onChange={this.onChange2}
                                                                placeholder="请输入您的评价"
                                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                                            />
                                                        </Modal>
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

            </div>
        )
    }
}
export default connect(
    state=>({myCourse: state.myCourse,userinfo: state.userInfo}),
    {userInfo,receiveMyCourse}
)(Personal)
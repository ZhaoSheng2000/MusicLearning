import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, Button, notification, Badge} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    CommentOutlined,
    TeamOutlined,
    EditOutlined,
    NotificationOutlined,
    IdcardOutlined,
} from '@ant-design/icons';

import './teacher.less'

import StudentInform from "../studentInform/studentInform";
import Notice from "../notice/notice";
import NoticeDetail from "../notice/noticeDetail/noticeDetail";
import CourseData from "../courseData/courseData";
import UserInfo from "../userInfo/userInfo";
import StudentDetail from "../studentInform/studentDetail/studentDetail";
import ClassRecord from "../classRecord/classRecord";


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu


export default class Teacher extends React.Component {

    componentDidMount() {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                详情
            </Button>
        );
        const close = () => {
            console.log(
                'Notification was closed. Either the close button was clicked or duration time elapsed.',
            );
        };
        notification.open({
            message: 'Notification Title',
            description:
                'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: close,
        });
    }

    state = {};

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}

                    >
                        <div className="myLogo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <a href={'/#/teacherPage'}>
                                    <TeamOutlined/>
                                    <span>学生信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href={'/#/teacherPage/classRecord'}>
                                    <DesktopOutlined/>
                                    <span>上课记录</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <CommentOutlined/>
                                <span>课下反馈</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                     <PieChartOutlined/>
                                      课堂统计
                                    </span>
                                }
                            >
                                <Menu.Item key="4">
                                    <a href={'/#/teacherPage/courseData'}>上课次数</a>
                                </Menu.Item>
                                <Menu.Item key="5">出勤率</Menu.Item>
                                <Menu.Item key="6">请假率</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="7">
                                <EditOutlined/>
                                <span>课堂评价</span>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <a href={'/#/teacherPage/notice'}>
                                    <Badge dot={true}>
                                        <NotificationOutlined/>
                                        <span>消息通知</span>
                                    </Badge>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <a href={'/#/teacherPage/userInfo'}>
                                    <IdcardOutlined/>
                                    <span>个人信息</span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{marginLeft: 200}}>
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1 style={{paddingLeft: 25}}>教师后台管理</h1>
                        </Header>
                        <Content style={{margin: '16px 16px'}}>
                            <Switch>
                                <Route path={'/teacherPage/notice'} component={Notice}/>
                                <Route path={'/teacherPage/noticeDetail'} component={NoticeDetail}/>
                                <Route path={'/teacherPage/courseData'} component={CourseData}/>
                                <Route path={'/teacherPage/userInfo'} component={UserInfo}/>
                                <Route path={'/teacherPage/studentDetail'} component={StudentDetail}/>
                                <Route path={'/teacherPage/classRecord'} component={ClassRecord}/>
                                <Route component={StudentInform}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
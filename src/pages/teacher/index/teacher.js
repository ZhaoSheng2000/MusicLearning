import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Layout, Menu,Button, notification} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    CommentOutlined,
    TeamOutlined,
    EditOutlined,
    NotificationOutlined,
    IdcardOutlined
} from '@ant-design/icons';

import './teacher.less'

import StudentInform from "../studentInform/studentInform";
import Notice from "../notice/notice";

const {Header, Content, Footer, Sider} = Layout;


const close = () => {
    console.log(
        'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
};

const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => notification.close(key)}>
            详情
        </Button>
    );
    notification.open({
        message: 'Notification Title',
        description:
            'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn,
        key,
        onClose: close,
    });
};

export default class Teacher extends React.Component {

    componentDidMount() {
            const key = `open${Date.now()}`;
            const btn = (
                <Button type="primary" size="small" onClick={() => notification.close(key)}>
                    详情
                </Button>
            );
            notification.open({
                message: 'Notification Title',
                description:
                    'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                btn,
                key,
                onClose: close,
            });
    }

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="myLogo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <a href={'/#/teacherPage/studentInform'}>
                                    <TeamOutlined/>
                                    <span>学生信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <DesktopOutlined/>
                                <span>上课记录</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <CommentOutlined />
                                <span>课下反馈</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <PieChartOutlined />
                                <span>课程统计</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <EditOutlined />
                                <span>课堂评价</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <a href={'/#/teacherPage'}/>
                                <NotificationOutlined />
                                <span>消息通知</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <IdcardOutlined />
                                <span>个人信息</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1 style={{paddingLeft:25}}>教师后台管理</h1>
                        </Header>
                        <Content style={{margin: '16px 16px'}}>
                                <Switch>
                                    <Route path='/teacherPage/studentInform' component={StudentInform} />
                                    <Route component={Notice}/>
                                </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
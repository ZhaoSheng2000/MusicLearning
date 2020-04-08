import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from 'antd';
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

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Teacher extends React.Component {

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
                                <TeamOutlined/>
                                <span>学生信息</span>
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
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                <Switch>
                                    <Route path='/teacherPage/studentInform' component={StudentInform} />
                                </Switch>
                                Bill is a cat.
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
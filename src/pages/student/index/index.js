import React from 'react'
import {Layout, Menu} from 'antd';
import {Route, Switch} from "react-router-dom";
import './index.less'
import {
    LogoutOutlined,
    UserOutlined,
    HomeOutlined,
    BookOutlined,
    BulbOutlined,
    TeamOutlined
} from '@ant-design/icons';

import Home from '../home/home'
import AllCourse from '../allCourse/allcourse'

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;


export default class index extends React.Component {

    state = {
        collapsed: false,

    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="myLogo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                        >
                            <Menu.Item key="0"><a href={'/#/'}><HomeOutlined/>首页</a></Menu.Item>
                            <Menu.Item key="1"> <a href={'/#/allcourse'}><BookOutlined />课程</a></Menu.Item>
                            <Menu.Item key="2"> <TeamOutlined />教师风采</Menu.Item>
                            <Menu.Item key="3"> <BulbOutlined />精彩讨论</Menu.Item>
                            <SubMenu title="我的" className="geren">
                                <Menu.Item> <UserOutlined/>我的资料</Menu.Item>
                                <Menu.Item><LogoutOutlined/>退出登录</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" className="geren">个人中心</Menu.Item>
                        </Menu>
                    </Header>
                    <Content className='mycontent'>
                            <Switch>
                                <Route path={'/allcourse'} component={AllCourse}/>
                                <Route  component={Home}/>
                            </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                </Layout>
            </div>
        )
    }
}
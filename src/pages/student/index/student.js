import React from 'react'
import {Layout, Menu,Input} from 'antd';
import {Link, Route, Switch} from "react-router-dom";
import './student.less'
import Cookies from 'js-cookie'
import {
    LogoutOutlined,
    UserOutlined,
    HomeOutlined,
    BookOutlined,
    BulbOutlined,
    TeamOutlined
} from '@ant-design/icons';

import Home from '../home/home';
import AllCourse from '../allCourse/allcourse';
import TeacherList from '../teacherList/teacherlist';
import TeacherDetail from "../teacherList/teacherDetail";
import CourseDetail from "../courseDetail/courseDetail";
import InformationDetail from "../informationDetail/informationDetail";
import Discuss from "../discuss/discuss";
import DiscussDetail from "../discussDetail/discussDetail";
import Personal from "../personal/personal";
import ChangeUserInfo from "../userInfo/changeUserInfo";

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;
const { Search } = Input;


export default class student extends React.Component {

    state = {
        collapsed: false,

    };
    onQuit=()=>{
        Cookies.remove('userId');
        this.props.history.push('/login')
    }

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
                            <Menu.Item key="0"><Link to={'/'}><HomeOutlined/>首页</Link></Menu.Item>
                            <Menu.Item key="1"> <Link to={'/allcourse'}><BookOutlined />课程</Link></Menu.Item>
                            <Menu.Item key="2"> <Link to={'/teacher'}><TeamOutlined />老师</Link></Menu.Item>
                            <Menu.Item key="3"> <Link to={'/discuss'}><BulbOutlined />精彩讨论</Link></Menu.Item>
                            <SubMenu title="我的" className="geren">
                                <Menu.Item> <Link to={'/changeuser'}><UserOutlined/>我的资料</Link> </Menu.Item>
                                <Menu.Item><a  onClick={this.onQuit}><LogoutOutlined/>退出登录</a> </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" className="geren"><Link to={'/personal'}>个人中心</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className='mycontent'>
                            <Switch>
                                <Route path={'/allcourse'} component={AllCourse}/>
                                <Route path={'/teacher'} component={TeacherList}/>
                                <Route path={'/teacherDetail'} component={TeacherDetail}/>
                                <Route path={'/courseDetail'} component={CourseDetail}/>
                                <Route path={'/information'} component={InformationDetail}/>
                                <Route path={'/discuss'} component={Discuss}/>
                                <Route path={'/discussDetail'} component={DiscussDetail}/>
                                <Route path={'/personal'} component={Personal}/>
                                <Route path={'/changeuser'} component={ChangeUserInfo}/>
                                <Route  component={Home}/>
                            </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Music Learning ©2020</Footer>
                </Layout>
            </div>
        )
    }
}
import React from 'react'
import {connect} from 'react-redux'
import {Carousel, Row, Col, Card, Avatar, Button, Typography, BackTop} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import {receiveNew} from "../redux/actions";
import './home.less'

const {Title} = Typography;
const {Meta} = Card;

class Home extends React.Component {
    state = {
        tuijian: [1, 2, 3, 4],
        yinyue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };

    onNews=()=>{
        this.props.receiveNew();

    };

    onCourseDetail = () => {
        this.props.history.push('/courseDetail')
    };
    onInformationDetail = () => {
        this.props.history.push('/information')
    }
    onQuestion = () => {
        this.props.history.push('/discussDetail')
    }

    render() {
        const {news} = this.props.news;
            console.log(news);
        return (
            <div>
                <Row gutter={12}>
                    <Col span={20}>
                        <Carousel autoplay>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={4}>
                        <Card style={{width: 200, height: 380}}>
                            <div style={{textAlign: "center"}}>
                                <Avatar size={64}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                <h2 style={{padding: 20}}>赵盛</h2>
                                <p>XXXX课程</p>
                                <p>XXXX课程</p>
                                <p>XXXX课程</p>
                                <div className="myBotton">
                                    <Button type="primary" block onClick={this.onNews}>
                                        我的课程
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <div className='myTitle'>
                    <Title level={3}>最新资讯</Title>
                </div>
                <Row gutter={16}>
                    {
                      this.state.tuijian.map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={this.onInformationDetail}
                                        hoverable
                                        style={{width: 300}}
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GmzF8x.jpg"/>}
                                    >
                                        <Meta title={`资讯${name}`} description="简介简介。。。。。。。简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className='myTitle'>
                    <Title level={3}>推荐课程</Title>
                </div>
                <Row gutter={16}>
                    {
                        this.state.tuijian.map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        style={{width: 300}}
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GmzF8x.jpg"/>}
                                    >
                                        <Meta title={`课程${name}`} description="简介简介。。。。。。。简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
                <br/>
                <br/>

                <div className='discuss'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <img alt='img' src='https://s1.ax1x.com/2020/04/01/G1Lm9A.png' className='myimg'/>
                            <h2 className='mystudy'>一起学习，一起成长</h2>
                            <h4 className='mystudy'>已有1000万学生在此发言讨论</h4>
                        </Col>
                        <Col span={8}>
                            <div className='discussCard'>
                                <Card title="XX老师 XX课程" hoverable style={{height: 200}} onClick={this.onQuestion}>
                                    <Title level={4}>问题问。。。。。。。。。？</Title>
                                    <p style={{position: "absolute", bottom: 0}}>已有234人参与讨论</p>
                                </Card>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='discussCard'>
                                <Card title="XX老师 XX课程" hoverable style={{height: 200}} onClick={this.onQuestion}>
                                    <Title level={4}>问题。。。。。。。。。？</Title>
                                    <p style={{position: "absolute", bottom: 0}}>已有234人参与讨论</p>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='myTitle'>
                    <Title level={3}>音乐</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        this.state.yinyue.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GnDSI0.png"/>}
                                    >
                                        <Meta title={name} description="简介简介简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='myTitle'>
                    <Title level={3}>文化</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        this.state.yinyue.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        key={index}
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GnsIaR.png"/>}
                                    >
                                        <Meta title={name} description="简介简介简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='myTitle'>
                    <Title level={3}>写作</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        this.state.yinyue.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        key={index}
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/31/GKp0Df.png"/>}
                                    >
                                        <Meta title={name} description="简介简介简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='myTitle'>
                    <Title level={3}>计算机</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        this.state.yinyue.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        key={index}
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/31/GKpg8s.png"/>}
                                    >
                                        <Meta title={name} description="简介简介简介"/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <br/>

                <div className='footerimg'>
                    <Title level={2}
                           style={{color: "white", textAlign: "center", padding: 50}}>自由的学习氛围，时刻为你准备！</Title>
                    <Row gutter={32}>
                        <Col span={8}>
                            <div style={{textAlign: "center"}}>
                                <Avatar size={100} icon={<UserOutlined/>}/>
                                <div>
                                    <h2 className='mystudy'>xxx学生</h2>
                                    <p className='footercomment'>
                                        我第一次感受到故宫角楼在夕阳下震撼的美，便是在考完《中国古代建筑艺术》之后的那个下午；学完了《不朽的艺术》，再去博物馆不再是陪儿子完成任务了。让我感受最深的就是鲍勃·迪伦的那句“昔日我曾苍老，如今风华正茂”
                                        。
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign: "center"}}>
                                <Avatar size={100} icon={<UserOutlined/>}/>
                                <div>
                                    <h2 className='mystudy'>xxx学生</h2>
                                    <p className='footercomment'>
                                        我第一次感受到故宫角楼在夕阳下震撼的美，便是在考完《中国古代建筑艺术》之后的那个下午；学完了《不朽的艺术》，再去博物馆不再是陪儿子完成任务了。让我感受最深的就是鲍勃·迪伦的那句“昔日我曾苍老，如今风华正茂”
                                        。
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign: "center"}}>
                                <Avatar size={100} icon={<UserOutlined/>}/>
                                <div>
                                    <h2 className='mystudy'>xxx学生</h2>
                                    <p className='footercomment'>
                                        我第一次感受到故宫角楼在夕阳下震撼的美，便是在考完《中国古代建筑艺术》之后的那个下午；学完了《不朽的艺术》，再去博物馆不再是陪儿子完成任务了。让我感受最深的就是鲍勃·迪伦的那句“昔日我曾苍老，如今风华正茂”
                                        。
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>

                <BackTop/>
            </div>
        )
    }
}


export default connect(
    state => ({news:state.news}),
    {receiveNew}
)(Home);




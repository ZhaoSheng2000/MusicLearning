import React from 'react'
import {connect} from 'react-redux'
import {Carousel, Row, Col, Card, Avatar, Button, Typography, BackTop, message} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Cookies from "js-cookie"


import {receiveNew, userInfo, receiveMyCourse, receiveAllCourse,receiveAllDiscuss,receiveTheNews} from "../../redux/actions";
import './home.less'

const {Title} = Typography;
const {Meta} = Card;

class Home extends React.Component {
    state = {
        tuijian: [1, 2, 3, 4],
        yinyue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };

    componentDidMount() {
        const id = Cookies.get("userId");
        if (!id) {
            message.error('请先登录！');
            this.props.history.push('/login')
        }
        this.props.receiveNew();
        const userId = Cookies.get("userId");
        this.props.userInfo(userId);
        this.props.receiveMyCourse(userId);
        this.props.receiveAllCourse();
        this.props.receiveAllDiscuss();

    }

    onCourseDetail = () => {
        this.props.history.push('/courseDetail')
    };
    onInformationDetail = (id) => {
        console.log(typeof id)
        this.props.receiveTheNews(id);
        this.props.history.push('/information')
    }
    onQuestion = () => {
        this.props.history.push(`/discussDetail`)
    }
    onPersonal = () => {
        this.props.history.push('/personal')
    }

    render() {
        const {news} = this.props.news;
        const {userinfo} = this.props.userinfo;
        const myCourse = this.props.myCourse.mycourse;
        const {allCourse} = this.props.allCourse;
        const {allDiscuss} = this.props.allDiscuss;
        console.log(allDiscuss)
        return (
            <div>
                <Row gutter={12}>
                    <Col span={20}>
                        <Carousel autoplay>
                            {
                                news.map((name, index) => {
                                    return (
                                        <div key={index}>
                                            <img alt="example" src={name.picture}/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col span={4}>
                        <Card style={{width: 200, height: 380}}>
                            <div style={{textAlign: "center"}}>
                                <Avatar size={64}
                                        src={userinfo.picture}/>
                                <h2 style={{padding: 20}}>{userinfo.nickname}</h2>
                                {myCourse.slice(0, 3).map((name, index) => {
                                    return (
                                        <p key={index}>{name.course_title}</p>
                                    )
                                })}

                                <div className="myBotton">
                                    <Button type="primary" block onClick={this.onPersonal}>
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
                        news.map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={()=>this.onInformationDetail(name.id)}
                                        hoverable
                                        style={{width: 300}}
                                        cover={<img alt="example" src={name.picture}/>}
                                    >
                                        <Meta title={name.title} description={name.intro}/>
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
                        allCourse.slice(0,4).map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        style={{width: 300}}
                                        cover={<img alt="example" src={name.img}/>}
                                    >
                                        <Meta title={name.course_title} description={name.course_content}/>
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
                        {
                            allDiscuss.slice(0,2).map((name,index)=>{
                                return(
                                    <Col span={8} key={index}>
                                        <div className='discussCard'>
                                            <Card title={`来自${name.coursename} ${name.teausername}老师`} hoverable style={{height: 200}} onClick={this.onQuestion}>
                                                <Title level={4}>{name.problem}</Title>
                                                <p style={{position: "absolute", bottom: 0}}>已有234人参与讨论</p>
                                            </Card>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

                <div className='myTitle'>
                    <Title level={3}>音乐</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        allCourse.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src={name.img}/>}
                                    >
                                        <Meta title={name.course_title} description={name.course_content}/>
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
                        allCourse.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src={name.img}/>}
                                    >
                                        <Meta title={name.course_title} description={name.course_content}/>
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
                        allCourse.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src={name.img}/>}
                                    >
                                        <Meta title={name.course_title} description={name.course_content}/>
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
                        allCourse.map((name, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src={name.img}/>}
                                    >
                                        <Meta title={name.course_title} description={name.course_content}/>
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
                                    <h2 className='mystudy'>学生</h2>
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
                                    <h2 className='mystudy'>学生</h2>
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
                                    <h2 className='mystudy'>学生</h2>
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
    state => ({
        news: state.news,
        user: state.user,
        userinfo: state.userInfo,
        myCourse: state.myCourse,
        allCourse:state.allCourse,
        allDiscuss:state.allDiscuss
    }), {receiveNew, userInfo, receiveMyCourse, receiveAllCourse,receiveAllDiscuss,receiveTheNews})(Home);




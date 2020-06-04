import React from 'react'
import {connect} from 'react-redux'
import {Carousel, Row, Col, Card, Typography, BackTop} from 'antd';

import './allcourse.less'

import {receiveAllCourse} from "../../redux/actions";

const {Title} = Typography;
const {Meta} = Card;


class allCourse extends React.Component {
    componentDidMount() {
        this.props.receiveAllCourse();
    }

    state = {
    };


    onCourseDetail=(id)=>{
        this.props.history.push({pathname:'/courseDetail',state:{id:id}})
    }

    render() {
        const {allCourse} = this.props.allCourse;
        console.log(allCourse);

        return (
            <div>
                <Carousel autoplay>
                    {
                        allCourse.slice(0,4).map((name,index)=>{
                            return(
                                <div key={index}>
                                    <img  alt="example" src={name.img} style={{height:380}} onClick={() =>{this.onCourseDetail(name.id)}}/>
                                </div>
                            )
                        })
                    }
                </Carousel>

                <div className='myTitle'>
                    <Title level={3}>最新好课推荐</Title>
                </div>
                <Row gutter={12}>
                    {
                        allCourse.slice(0,6).map((course, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={()=>this.onCourseDetail(course.id)}
                                        hoverable
                                        cover={<img alt="example" src={course.img}/>}
                                    >
                                        <Meta title={course.course_title} description={`${course.course_content.slice(0,25)}...`}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='myTitle'>
                    <Title level={3}>全部课程</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        allCourse.map((course, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={()=>this.onCourseDetail(course.class_teacher,course.id)}
                                        hoverable
                                        cover={<img alt="example" src={course.img}/>}
                                    >
                                        <Meta title={course.course_title} description={`${course.course_content.slice(0,25)}...`}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <BackTop/>
            </div>
        )
    }
}
export default connect(
    state =>({allCourse:state.allCourse}),{receiveAllCourse}
)(allCourse)
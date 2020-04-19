import React from 'react'
import {connect} from 'react-redux'
import {Carousel, Row, Col, Card, Typography, BackTop, Pagination} from 'antd';

import './allcourse.less'

import {receiveAllCourse,receivedCourseDetail,receivedCoureReview} from "../../redux/actions";

const {Title} = Typography;
const {Meta} = Card;


class allCourse extends React.Component {
    componentDidMount() {
        this.props.receiveAllCourse();
    }

    state = {
        course: [1, 2, 3, 4, 5, 6],
        allcourse: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    };

    onChange = (pageNumber)=> {
        console.log('Page: ', pageNumber);
    }
    onCourseDetail=(class_teacher,id)=>{
        console.log(typeof class_teacher)
        this.props.receivedCourseDetail(id);
        this.props.receivedCoureReview(id,class_teacher);
        this.props.history.push('/courseDetail')
    }

    render() {
        const {allCourse} = this.props.allCourse;
        console.log(allCourse);

        return (
            <div>
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

                <div className='myTitle'>
                    <Title level={3}>最新好课推荐</Title>
                </div>
                <Row gutter={12}>
                    {
                        allCourse.slice(0,6).map((course, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={()=>this.onCourseDetail(course.class_teacher,course.id)}
                                        hoverable
                                        cover={<img alt="example" src={course.img}/>}
                                    >
                                        <Meta title={course.course_title} description={course.course_content}/>
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
                                        <Meta title={course.course_title} description={course.course_content}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div style={{textAlign:"center"}}>
                    <Pagination  defaultPageSize={24} defaultCurrent={1} total={500} onChange={this.onChange}/>
                </div>
                <BackTop/>
            </div>
        )
    }
}
export default connect(
    state =>({allCourse:state.allCourse}),{receiveAllCourse,receivedCourseDetail,receivedCoureReview}
)(allCourse)
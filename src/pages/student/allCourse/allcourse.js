import React from 'react'
import {connect} from 'react-redux'
import {Carousel, Row, Col, Card, Typography, BackTop, Pagination} from 'antd';

import './allcourse.less'

const {Title} = Typography;
const {Meta} = Card;


class allCourse extends React.Component {

    state = {
        course: [1, 2, 3, 4, 5, 6],
        allcourse: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    };

    onChange = (pageNumber)=> {
        console.log('Page: ', pageNumber);
    }
    onCourseDetail=()=>{
        this.props.history.push('/courseDetail')
    }

    render() {
        console.log(this.props)
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
                        this.state.course.map((course, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        onClick={this.onCourseDetail}
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GmzF8x.jpg"/>}
                                    >
                                        <Meta title="XXXXX课程" description={`课程${course}简介`}/>
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
                        this.state.allcourse.map((course, index) => {
                            return (
                                <Col span={4} key={index}>
                                    <Card
                                        hoverable
                                        cover={<img alt="example" src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>}
                                    >
                                        <Meta title="XXXXX课程" description={`课程${course}简介`}/>
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
    state =>({news:state.news})
)(allCourse)
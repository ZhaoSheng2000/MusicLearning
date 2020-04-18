import React from 'react'
import {connect} from 'react-redux'
import {Avatar, Card, Col, Row, Typography} from 'antd';

import './teacherDetail.less'

const {Title} = Typography;
const {Meta} = Card;

class TeacherDetail extends React.Component {

    state = {
        course:[1,2,3,4,5,6,7]
    };

    render() {
        const {theTeacher} = this.props.theTeacher;
        const {teacherCourse} = this.props.teacherCourse;

        return (
            <div>
                <div className='headerimg'>
                    <div className='teacheravatar'>
                        <Avatar size={128} src={theTeacher.picture} />
                        <Title level={2} style={{color:"white",paddingTop:10}}>{theTeacher.nickname}</Title>
                        <div style={{paddingLeft:30,paddingRight:30}}>
                            <Card style={{ height:180}}>
                                <p>
                                    {theTeacher.remark}
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>

                <div style={{paddingTop:200}}>
                    <Title level={4}>主讲课程&nbsp;&nbsp;</Title>
                    <Row gutter={[16,16]}>
                        {
                            teacherCourse.map((name,index)=>{
                                return(
                                    <Col span={6} key={index}>
                                        <Card
                                            cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GnDSI0.png"/>}
                                        >
                                            <Meta title={name.course_title} description={name.course_content}/>
                                        </Card>
                                    </Col>
                                )
                            })
                        }



                    </Row>
                </div>


            </div>
        )
    }
}
export default connect(
    state=>({theTeacher: state.theTeacher,teacherCourse:state.teacherCourse})
)(TeacherDetail)
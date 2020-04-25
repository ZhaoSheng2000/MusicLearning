import React from 'react'
import {connect} from 'react-redux'

import {Row, Col, Card, Typography} from 'antd'

import './teacherlist.less'
import {receivedAllTeacher, receivedTheTeacher, receivedTeacherCourse} from "../../redux/actions";


const {Meta} = Card;
const {Title} = Typography;

class teacherList extends React.Component {

    state = {
        teacher: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };

    componentDidMount() {
        this.props.receivedAllTeacher();
    }

    onTeacherDetail = (id) => {
        this.props.receivedTheTeacher(id);
        this.props.receivedTeacherCourse(id);

        this.props.history.push('./teacherDetail');
    }

    render() {
        const {allTeacher} = this.props.allTeacher;
        console.log(allTeacher);

        return (
            <div>
                <div className='myTitle'>
                    <Title level={3}>摇滚乐</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        allTeacher.map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={() => this.onTeacherDetail(name.id)}
                                        hoverable
                                        cover={<img alt="teacher"
                                                    src={name.picture}/>}
                                    >
                                        <Meta title={name.nickname} description={name.remark}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className='myTitle'>
                    <Title level={3}>流行乐</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        allTeacher.map((name, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Card
                                        onClick={() => this.onTeacherDetail( name.id)}
                                        hoverable
                                        cover={<img alt="teacher"
                                                    src={name.picture}/>}
                                    >
                                        <Meta title={name.nickname} description={name.remark}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </div>
        )
    }
}

export default connect(
    state => ({allTeacher: state.allTeacher}), {
        receivedAllTeacher,
        receivedTheTeacher,
        receivedTeacherCourse,
    }
)(teacherList)
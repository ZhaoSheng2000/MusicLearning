import React from 'react'
import {Row, Col, Card, Typography} from 'antd'

import './teacherlist.less'

const {Meta} = Card;
const {Title} = Typography;

export default class teacherList extends React.Component {

    state = {
        teacher: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };

    onTeacherDetail=()=>{
        this.props.history.push('./teacherDetail');
}

    render() {
        return (
            <div>
                <div className='myTitle'>
                    <Title level={3}>分类一</Title>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card
                            onClick={this.onTeacherDetail}
                            hoverable
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Teacher" description="描述描述。。。"/>
                        </Card>
                    </Col>
                </Row>

                <div className='myTitle'>
                    <Title level={3}>分类二</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        this.state.teacher.map((name,index)=>{
                            return(
                                <Col span={6}>
                                    <Card
                                        onClick={this.onTeacherDetail}
                                        hoverable
                                        cover={<img alt="teacher"
                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    >
                                        <Meta title={`teacher${name}`} description="描述描述。。。"/>
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
import React from 'react'
import {Card, Col, Row, Typography} from "antd";

const { Paragraph } = Typography;

export default class ClassFeedback extends React.Component {

    state = {question:[1,2,3,4,5,6,7,8,9,10]};

    onDetail=()=>{
      this.props.history.push('/teacherPage/feedbackDetail')
    };
    render() {
        return (
            <div>
                <Row gutter={[12,12]}>
                    {
                        this.state.question.map((name,index)=>{
                            return(
                                <Col span={22} key={index}>
                                    <Card
                                        title={`问题${name}`}
                                        size={"small"}
                                        hoverable
                                        extra={'2020-01-01'}
                                        onClick={this.onDetail}
                                    >
                                        <Paragraph type={"warning"}>来自学生{name}</Paragraph>
                                        休息休息？
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
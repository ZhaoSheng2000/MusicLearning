import React from 'react'

import {Card, Col, Comment, List, Row} from "antd";
import {reqFeedback} from "../../../api"


export default class ClassFeedback extends React.Component {

    state = {
        question: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        feedback: []
    };

    componentDidMount() {
        const {id, tea_id} = this.props.location.state
        reqFeedback(id, tea_id).then(res => {
            this.setState({feedback: res.data.data})
        })
    }

    render() {
        const {feedback} = this.state
        console.log(feedback)
        return (
            <div>
                <Row gutter={[12, 12]}>
                    <Col span={22}>
                        <Card>
                            <List
                                header={`${feedback.length} 反馈`}
                                itemLayout="horizontal"
                                dataSource={feedback}
                                renderItem={item => (
                                    <li>
                                        <Comment
                                            author={item.nickname}
                                            avatar={item.picture}
                                            content={item.feedback}
                                            datetime={item.intime}
                                        />
                                    </li>
                                )}
                            />
                        </Card>

                    </Col>


                </Row>

            </div>
        )
    }
}

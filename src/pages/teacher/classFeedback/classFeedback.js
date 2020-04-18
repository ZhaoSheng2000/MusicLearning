import React from 'react'
import {connect} from 'react-redux'

import {Card, Col, Row, Typography} from "antd";

const { Paragraph } = Typography;

 class ClassFeedback extends React.Component {

    state = {question:[1,2,3,4,5,6,7,8,9,10]};

    render() {
        const {feedBack} = this.props.feedBack
        return (
            <div>
                <Row gutter={[12,12]}>
                    {
                        feedBack.map((feedBack,index)=>{
                            return(
                                <Col span={22} key={index}>
                                    <Card
                                        title={feedBack.feedback}
                                        size={"small"}
                                    >
                                        {feedBack.feedback }
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
    state =>({feedBack: state.feedBack})
)(ClassFeedback)
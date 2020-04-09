import React from 'react'
import {Card, Col, Row, Pagination} from "antd";


export default class Notice extends React.Component {

    state = {
        inform:[1,2,3,4,5,6,7,8,9,10,]
    };
    onDetail=()=>{
        this.props.history.push('/teacherPage/noticeDetail')
    }

    render() {
        return (
            <div>
                <Row gutter={[16,8]}>
                    {
                        this.state.inform.map((name,index)=>{
                            return(
                                <Col span={23} key={index}>
                                    <Card
                                        onClick={this.onDetail}
                                        title={`通知${name}`}
                                        size={"small"}
                                        extra={'2020-2-13 09:00'}
                                        hoverable
                                        style={{height:100}}
                                    >
                                        发件人：admin
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <br/>
                <Pagination defaultCurrent={1} total={50}  style={{textAlign:"center"}}/>
            </div>
        )
    }
}
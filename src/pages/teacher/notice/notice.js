import React from 'react'
import {Card, Col, Row} from "antd";

import {reqNotice} from "../../../api";

export default class Notice extends React.Component {

    state = {
        inform:[1,2,3,4,5,6,7,8,9,10,]
    };
    componentDidMount() {
        reqNotice(2).then(r =>{
            if (r.data.error_code===4009){
                this.setState({
                    inform:r.data.data
                })
            }
        } )
    };
    onDetail =(id)=>{
        this.props.history.push({pathname:'/teacherPage/noticeDetail',state:{id:id}})
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
                                        hoverable
                                        title={name.title}
                                        size={"small"}
                                        extra={name.time}
                                        style={{height:100}}
                                        onClick={()=>this.onDetail(name.id)}
                                    >
                                        {name.intro}
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
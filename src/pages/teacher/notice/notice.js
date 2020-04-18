import React from 'react'
import {Card, Col, Row, Pagination} from "antd";

import {reqNotice} from "../../../api";

export default class Notice extends React.Component {

    state = {
        inform:[1,2,3,4,5,6,7,8,9,10,]
    };
    componentDidMount() {
        reqNotice(2).then(r =>{
            console.log(r.data);
            if (r.data.error_code===4009){
                this.setState({
                    inform:r.data.data
                })
            }
        } )
    };

    render() {
        return (
            <div>
                <Row gutter={[16,8]}>
                    {
                        this.state.inform.map((name,index)=>{
                            return(
                                <Col span={23} key={index}>
                                    <Card
                                        title={name.title}
                                        size={"small"}
                                        extra={name.time}
                                        style={{height:100}}
                                    >
                                        {name.intro}
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
import React from 'react'
import {Card, Col, Row,Avatar, Statistic} from "antd";
import Cookies from 'js-cookie';
import {reqAllStudent} from "../../../api";

const { Meta } = Card;

export default class StudentInform extends React.Component {

    state = {
        student:[]
    };
    componentDidMount() {
        const id = Cookies.get("userId");
        reqAllStudent(id).then(r =>{
            this.setState({student:r.data.data});
        })
    }

    // onDetail=()=>{
    //     this.props.history.push('/teacherPage/studentDetail')
    // }

    render() {
        return (
            <div>
                <Row gutter={[24,16]}>
                    {
                        this.state.student.map((name,index)=>{
                            return(
                                <Col span={6} key={index}>
                                    <Card>
                                        <Meta
                                            avatar={<Avatar src={name.picture} />}
                                            title={`学生${name.username}`}
                                            description={
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Statistic title="上课次数" value={name.checkintimes} />
                                                    </Col>
                                                </Row>
                                            }
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                 ]
                </Row>
            </div>
        )
    }
}
import React from 'react'
import {Avatar, Card, Col, Row, Typography} from 'antd';

import './teacherDetail.less'

const {Title} = Typography;
const {Meta} = Card;

export default class TeacherDetail extends React.Component {

    state = {
        course:[1,2,3,4,5,6,7]
    };

    render() {
        return (
            <div>
                <div className='headerimg'>
                    <div className='teacheravatar'>
                        <Avatar size={128} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Title level={2} style={{color:"white",paddingTop:10}}>ZZULI</Title>
                        <div style={{paddingLeft:30,paddingRight:30}}>
                            <Card style={{ height:180}}>
                                <p>郑州轻工业大学（Zhengzhou University of Light Industry）位于河南省会郑州市，是中央与地方共建、以地方管理为主的河南省特色骨干大学，是河南省人民政府和国家烟草专卖局共建高校，河南省博士学位授予重点立项建设单位，入选教育部卓越工程师教育培养计划、国家级大学生创新创业训练计划、全国毕业生就业典型经验高校、河南省优势特色学科建设工程。</p>
                            </Card>
                        </div>
                    </div>
                </div>

                <div style={{paddingTop:200}}>
                    <Title level={4}>主讲课程&nbsp;&nbsp; 7</Title>
                    <Row gutter={[16,16]}>
                        {
                            this.state.course.map((name,index)=>{
                                return(
                                    <Col span={6} key={index}>
                                        <Card
                                            hoverable
                                            cover={<img alt="example" src="https://s1.ax1x.com/2020/03/30/GnDSI0.png"/>}
                                        >
                                            <Meta title={`课程${name}`} description="简介简介简介"/>
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
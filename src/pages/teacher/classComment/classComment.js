import React from 'react'
import {Button, Card, Col, Progress, Row, Typography, Modal, Input, message} from "antd";
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import {receivedTeacherCourse,receivedCoureReview} from "../../redux/actions";
import {reqNewDiscuss} from "../../../api";

const {Title, Text} = Typography;
const { TextArea } = Input;


 class ClassComment extends React.Component {

    state = {course:[1,2,3,4,5,6,7],
        visible: false,
        value:'',
        courseid:''
    };
    componentDidMount() {
        const id = Cookies.get("userId");
        this.props.receivedTeacherCourse(id);
    }

     onCommentDetail=(id,teacher)=>{
        this.props.history.push({pathname:"/teacherPage/commentDetail",state:{id:id,teacher:teacher}})
    };
     showModal = (course) => {
         this.setState({
             visible: true,
             courseid:course
         });
     };
     handleOk = () => {
         const id = Cookies.get("userId");
         const problem = this.state.value;
         const coureid = this.state.courseid
         if (problem===''){
             message.warning("请输入讨论主题！")
         }
         else {
             let date = new Date();
             let year = date.getFullYear();
             let month = date.getMonth() + 1;
             let day = date.getDate();
             if (month < 10) {
                 month = "0" + month;
             }
             if (day < 10) {
                 day = "0" + day;
             }
             const release_time = `${year}-${month}-${day}`;
             reqNewDiscuss(id,problem,release_time,coureid).then(r => {
                 if(r.data.error_code===8001){
                     message.success('新建讨论成功！')
                     this.setState({
                         visible: false,
                     });
                 }
             })
         }

     };
     handleCancel = ()=> {
         this.setState({
             visible: false,
         });
     };
     onChange = ({ target: { value } }) => {
         this.setState({ value });
     };

    render() {
        const{teacherCourse} = this.props.teacherCourse;
        const { value } = this.state;
        console.log(teacherCourse)
        return (
            <div>
                <Title level={3}>我的课程</Title>
                <Row gutter={[16,16]}>
                    <Col span={22}>
                        {
                            teacherCourse.map((name,index)=>(
                                    <Card  key={index}>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                            </Col>
                                            <Col span={8}>
                                                <Title level={4}>{name.course_title}</Title>
                                                <br/>
                                                <br/>
                                                <Text>已上课时</Text><br/>
                                                <Progress style={{width:200}} percent={80} />
                                            </Col>
                                            <Col span={8}>
                                                <Title level={4}>上课时间</Title>
                                                <Text type={"warning"}>
                                                   {name.course_start_time}——{name.course_end_time}
                                                </Text>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <div>
                                                    <Button  type={"primary"} onClick={()=>this.onCommentDetail(name.id,name.tea_id)}>查看评价</Button>
                                                    &nbsp;&nbsp; <Button  type={"primary"} onClick={()=>this.showModal(name.id,)}>新建讨论</Button>
                                                    <Modal
                                                        title="新建讨论"
                                                        visible={this.state.visible}
                                                        onOk={()=>this.handleOk()}
                                                        onCancel={this.handleCancel}
                                                    >
                                                        <TextArea
                                                            value={value}
                                                            onChange={this.onChange}
                                                            placeholder="请输入讨论主题"
                                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                                        />
                                                    </Modal>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                )
                            )
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}
export default connect(
    state=>({teacherCourse:state.teacherCourse}),{receivedTeacherCourse,receivedCoureReview}
)(ClassComment)
import React from 'react'
import {connect} from 'react-redux'
import {Breadcrumb, Card, List, Avatar} from "antd";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
class CommentDetail extends React.Component {

    state = {};

    render() {
        const {courseReview} = this.props.courseReview
        console.log(courseReview);
        return (
            <div>
                <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>课堂评价</Breadcrumb.Item>
                    <Breadcrumb.Item>评价详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={courseReview}
                        renderItem={item => (
                            <List.Item
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={item.stu_id}
                                    description={item.evaluation}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}

export default connect(
    state=>({courseReview:state.courseReview})
)(CommentDetail)
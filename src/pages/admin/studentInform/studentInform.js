import React from 'react'
import {Card, Table, Tag, Input, Button, Modal, Form, InputNumber} from "antd";

const {Search} = Input;

const {Column} = Table;

const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 18},
};


const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '8',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '10',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '11',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '12',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


export default class StudentInform extends React.Component {

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div>
                <Card
                    title={
                        <Search style={{width: 500}} placeholder="输入姓名检索" onSearch={value => console.log(value)}
                                enterButton/>
                    }
                    extra={<Button type={"primary"} onClick={this.showModal}>添加成员</Button>}
                >
                    <Table dataSource={data}>
                        <Column title=" Name" dataIndex="name" key="name"/>
                        <Column title="Age" dataIndex="age" key="age"/>
                        <Column title="Address" dataIndex="address" key="address"/>
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={tags => (
                                <span>
                                  {tags.map(tag => (
                                      <Tag color="blue" key={tag}>
                                          {tag}
                                      </Tag>
                                  ))}
                                </span>
                            )}
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={() => (
                                <span>
                                  <a style={{marginRight: 16}} onClick={this.showModal}>编辑</a>
                                  <a>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                </Card>

                <Modal
                    title="添加学生信息"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="姓名"
                            name="username"
                            rules={[{required: true, message: '请输入学生姓名!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="年龄"
                            name="age"
                            rules={[{required: true, message: '请输入学生年龄!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="学习基础"
                            name="study"
                            rules={[{required: true, message: '请输入学生音乐学习基础!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="家长姓名"
                            name="parent"
                            rules={[{required: true, message: '请输入学生家长姓名!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="手机号"
                            name="phone"
                            rules={[{required: true, message: '请输入正确的学生手机号!'}]}
                        >
                            <InputNumber style={{width: 315}}/>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
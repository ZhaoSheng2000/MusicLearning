import React from 'react'
import {Card, Tabs, Table, Button} from "antd";

const {TabPane} = Tabs;
const {Column} = Table;


const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}


export default class UpdateNews extends React.Component {

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    onDetail=()=>{
        this.props.history.push('/admin/newsDetail')
    }

    render() {
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <Card style={{minHeight: window.innerHeight - 160}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="已发布" key="1">
                            <div>
                                <div style={{marginBottom: 16}}>
                                    <Button type="primary" onClick={this.start} disabled={!hasSelected}
                                            loading={loading}>
                                        批量删除
                                    </Button>
                                    <span style={{marginLeft: 8}}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                    </span>
                                </div>
                                <Table rowSelection={rowSelection} dataSource={data}>
                                    <Column title=" 标题" dataIndex="name" key="name"/>
                                    <Column title="作者" dataIndex="age" key="age"/>
                                    <Column title="简介" dataIndex="address" key="address"/>
                                    <Column
                                        title="操作"
                                        key="action"
                                        render={() => (
                                            <span>
                                  <a style={{marginRight: 16}} onClick={this.onDetail}>编辑</a>
                                  <a>删除</a>
                                </span>
                                        )}
                                    />
                                </Table>
                            </div>
                        </TabPane>
                        <TabPane tab="未发布" key="2">
                            <div>
                                <div style={{marginBottom: 16}}>
                                    <Button type="primary" onClick={this.start} disabled={!hasSelected}
                                            loading={loading}>
                                        批量发布
                                    </Button>
                                    <span style={{marginLeft: 8}}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                    </span>
                                </div>
                                <Table rowSelection={rowSelection} dataSource={data}>
                                    <Column title=" 标题" dataIndex="name" key="name"/>
                                    <Column title="作者" dataIndex="age" key="age"/>
                                    <Column title="简介" dataIndex="address" key="address"/>
                                    <Column
                                        title="操作"
                                        key="action"
                                        render={() => (
                                            <span>
                                  <a style={{marginRight: 16}} onClick={this.onDetail}>编辑</a>
                                  <a>删除</a>
                                </span>
                                        )}
                                    />
                                </Table>
                            </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}
import React from 'react'
import {connect} from 'react-redux'
import {Breadcrumb, Card, List, Avatar, Comment} from "antd";
import {reqcourseReview} from "../../../../api"

const pingjia =[
    {
        name:"王皓",
        date:"2020-05-01",
        avatar:'https://dummyimage.com/200x200/02adea&text=王',
        des:"老师太厉害了！老师知识面很广，能够旁征博引，由点及面，让我们学到大量谱面之外的知识，并且孙老师讲课风趣幽默，能将将枯燥的东西变得十分有趣！整堂课思路清晰，环节紧凑，重难点突出，设计合理。老师也十分有耐心的为我们讲解，让我们看完之后对肖邦的作品有了很大的认识和了解"
    },
    {
        name:"李豪克",
        avatar:'https://dummyimage.com/200x200/02adea&text=李',
        date:"2020-05-04",
        des:"如果我们希望有一次精神的突围， 音乐无疑是一种很不错的选择～～～ 你是这场发生的音乐的必不可少且至关重要的作者与创造者， 因为过去属于过去， 当下才是它重生的理由！"
    },
    {
        name:"王位",
        avatar:'https://dummyimage.com/200x200/02adea&text=王',
        date:"2020-05-09",
        des:"人人都可进入音乐生活； 人人都可使用音乐； 人人都可对音乐进行评论·； 人人都可学会配乐； 人人都可创意音乐、参与演唱、演奏和原创音乐。 入乐、用乐、评乐、配乐、作乐， 音乐原来如此简单 ！"
    },
    {
        name:"汪康",
        avatar:'https://dummyimage.com/200x200/02adea&text=汪',
        date:"2020-05-09",
        des:"如果我们希望有一次精神的突围， 音乐无疑是一种很不错的选择～～～ 你是这场发生的音乐的必不可少且至关重要的作者与创造者， 因为过去属于过去， 当下才是它重生的理由！"
    },
    {
        name:"李帅",
        avatar:'https://dummyimage.com/200x200/02adea&text=李',

        date:'2020-05-11',
        des:"这个课最大的优点，是超越了音乐本身，让我们从另一个角度去思考音乐，运用音乐，创造音乐，比如如何进行乐评、如何进行配乐等等，特别是教学时提供的丰富的视频资料让人眼界大开，每一个片段都是经典，都是美的享受，太好！"
    },
    {
        name:'李丽',
        avatar:'https://dummyimage.com/200x200/02adea&text=李',

        date:"2020-05-12",
        des:"收获很多，在教学中节奏是最容易的扑捉到的，让学生通过丰富的节奏、肢体训练，提升音乐素质、身体的协调力。"
    },
    {
        name:'王先',
        avatar:'https://dummyimage.com/200x200/02adea&text=王',

        date:"2020-05-15",
        des:"老师的讲课授课方式都很好，基础差的也能够理解。不过学习过程中，由于没有基础教材，理解五线谱有点困难。 希望老师能够多在讨论区答疑，公告上能给出上课参考教材，课程很棒！！！"
    },
    ]
class CommentDetail extends React.Component {

    state = {pingjia:[]};
    componentDidMount() {
        const {id,teacher} = this.props.location.state
        console.log(id,teacher)
        reqcourseReview(id,teacher).then(res =>{
            const pingjia = res.data.data
            this.setState({pingjia})
        })
    }

    render() {
        const {pingjia} = this.state
        console.log(pingjia)
        return (
            <div>
                <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>课堂评价</Breadcrumb.Item>
                    <Breadcrumb.Item>评价详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={pingjia}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.nickname}
                                    avatar={item.picture}
                                    content={item.evaluation}
                                    datetime={item.intime}
                                />
                            </li>
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
import Mock from 'mockjs'


export default Mock.mock('/disc/getDisReplyByID', 'post',{
    "error_code": 9005,
    "data": [
        {
            "content": "问题问题",
            "dis_id": "1",
            "id": 1,
            "stu_id": "3"
        }
    ]
} )
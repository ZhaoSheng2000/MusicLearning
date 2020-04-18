import Mock from 'mockjs'


export default Mock.mock('/notice/getContent', 'post',{
    "error_code": 4007,
    "msg": "获取文件内容成功",
    "data": [
        {
            "title": "@ctitle",
            "content": "@cparagraph"
        }
    ]
} )
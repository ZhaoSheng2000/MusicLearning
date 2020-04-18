import Mock from 'mockjs'


export default Mock.mock('/stu/getTeaList', 'get',{
    "error_code": 2011,
    "data|12": [
        {
            "age": 22,
            "checkintimes": 0,
            "email": "1008612@qq.com",
            "id": 2,
            "nickname": "@cname",
            "phone": "1008612",
            "picture": "@image('300x370','#363b40','teacher')",
            "remark": "@csentence(5,9)",
            "sex": 2,
            "status": "1",
            "username": "linln"
        }
    ]
} )
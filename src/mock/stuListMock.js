import Mock from 'mockjs'


export default Mock.mock('/stu/getCourseStuList', 'post',{
    "error_code": 3001,
    "data|4": [
        {
            "age": 20,
            "email": "1112222333@xx.com",
            "id": 3,
            "nickname": "test",
            "phone": "12233334444",
            "picture": "p3",
            "remark": "",
            "sex": 1,
            "status": "1",
            "username": "test"
        }
    ]
} )
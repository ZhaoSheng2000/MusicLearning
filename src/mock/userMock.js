import Mock from 'mockjs'

export default Mock.mock('/stu/getAllThings','post',{
    "error_code": 3011,
    "data": [
        {
            "age": 20,
            "checkintimes": 13,
            "email": "1112222333@xx.com",
            "id": 3,
            "nickname": "赵盛",
            "phone": "12233334444",
            "picture": "@image('125x125','#363b40','Avatar')",
            "remark": "",
            "sex": 1,
            "status": "1",
            "username": "test"
        }
    ]
})
import Mock from 'mockjs'


export default Mock.mock('/login', 'post', {
    "error_code": 100,
    "msg": "登录成功",
    "data": [
        {
            "email": "1112222333@xx.com",
            "id": 3,
            "nickname": "test",
            "phone": "12233334444",
            "picture": "@image('125x125','#363b40','Avatar')",
            "remark": "",
            "sex": 1,
            "status": "1",
            "username": "test"
        }
    ]
})
import Mock from 'mockjs'

export default Mock.mock('/notice/find', 'get', {
        "error_code": 0,
        "data|4": [
            {
                "content": "@csentence",
                "id": 1,
                "time": "@date('yyyy-MM-dd')",
                "pic": "@image('710x360','#02adea', 'Hello')",
                "title": "@ctitle"
            }
        ]
    }
)
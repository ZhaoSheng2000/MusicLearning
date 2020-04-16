import Mock from 'mockjs'

export default Mock.mock('/notice/find', 'get', {
        "error_code": 4003,
        "data|4": [
            {
                "content": "testCon",
                "id": 1,
                "intro": "@csentence(5,9)",
                "picture": "@image('1030x380','#363b40','news')",
                "time": "2020-04-02 01:01:01",
                "title": "@ctitle",
                "tosub": 3
            }
        ]
    }
)
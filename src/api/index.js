import axios from 'axios'
import '../mock/loginMock.js'
import '../mock/newMock'
//登录接口
export const reqLogin = ({username, password}) =>
        axios.post('/login', {
                username,
                password
            });

//获取最新资讯
export const reqNews = () =>
    axios.get('/notice/find', {
        params: {}
    });
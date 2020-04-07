/*
包含n个 action creator
异步action
同步action
 */
//每一个type必然对应一个同步action
import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_NEWS
} from "./action-types";

import {
    reqLogin,
    reqNews
} from "../../../api";


//登陆成功的同步action
const loginSuccess = (user) => ({type: LOGIN_SUCCESS, data: user});
//错误提示信息的action
const errMsg = (msg) => ({type: ERR_MSG, data: msg});

//获取news同步action
const receiveNews = (news) => ({type: RECEIVE_NEWS, data: news})

//登陆的异步action
export const userLogin = (user) => {
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        if (result.err_code === 1002) {
            dispatch(errMsg('该用户不存在！'))
        } else
            dispatch(loginSuccess(result))
    }
};

//get News
export const receiveNew = () => {
    return async dispatch => {
        const response = await reqNews();
        const result = response.data;
        if (result.errorCode === 100) {
            dispatch(errMsg('获取news错误!'))
        } else
            dispatch(receiveNews(result))
    }
}





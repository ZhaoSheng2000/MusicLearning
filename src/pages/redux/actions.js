/*
包含n个 action creator
异步action
同步action
 */
//每一个type必然对应一个同步action
import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_NEWS,
    ALL_COURSE,
    USER_INFO,
    MY_COURSE
} from "./action-types";

import {
    reqLogin,
    reqNews,
    reqUserInfo,
    reqMyCourse,
    reqAllCourse
} from "../../api";


//登陆成功的同步action
const loginSuccess = (user) => ({type: LOGIN_SUCCESS, data: user});
//错误提示信息的action
const errMsg = (msg) => ({type: ERR_MSG, data: msg});
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

//UserInfo
const receivedUserInfo = (userInfo) => ({type: USER_INFO, data: userInfo});
export const userInfo = (id) => {
    return async dispatch => {
        const response = await reqUserInfo(id);
        const result = response.data;
        if (result.error_code === 3011) {
            dispatch(receivedUserInfo(result.data[0]))
        } else
            dispatch(errMsg(result))
    }
};

//get News
//获取news同步action
const receiveNews = (news) => ({type: RECEIVE_NEWS, data: news});
export const receiveNew = () => {
    return async dispatch => {
        const response = await reqNews();
        const result = response.data;
        if (result.errorCode === 100) {
            dispatch(errMsg('获取news错误!'))
        } else
            dispatch(receiveNews(result))
    }
};

//my_course
const receivedMycourse = (course) =>({type:MY_COURSE,data:course});
//异步
export const receiveMyCourse = (userid)=>{
    return async dispatch =>{
        const response = await reqMyCourse(userid);
        const result = response.data;
        if (result.error_code===5005){
            dispatch(receivedMycourse(result.data))
        }else {
            dispatch(errMsg(result))
        }
    }
};

//get_all_course
const receiveAllcoure = (allCourse) =>({type:ALL_COURSE,data:allCourse});
//异步
export const receiveAllCourse = () =>{
    return async dispatch =>{
        const response = await reqAllCourse();
        const result  = response.data;
        if (result.error_code === 5002){
            dispatch(errMsg(result))
        }else {
            dispatch(receiveAllcoure(result.data))
        }
    }
}






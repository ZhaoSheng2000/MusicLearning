/*
包含多个reducer函数：根据老的state和制定的action返回一个新的state
 */
//暴露多个函数需要combineReducers
import {combineReducers} from 'redux'

import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_NEWS,
    USER_INFO,
    MY_COURSE,
    ALL_COURSE
} from "./action-types";


const defaultUser = {
    user:'',
}

//产生user状态的reducer
function user(state=defaultUser,action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{...state,user:action.data.data};
        case ERR_MSG:
            return{...state,message:action.data};
        default:
            return state
    }
}

//news
const defaultNews = {
    news:[],
}
function news(state = defaultNews,action) {
    switch (action.type) {
        case RECEIVE_NEWS:
            return{...state,news:action.data.data};
        case ERR_MSG:
            return {...state,message:action.data}
        default:
            return state
    }
}

//userinfo
const initUserInfo = {userinfo:{}};
function userInfo(state=initUserInfo,action) {
    if (action.type === USER_INFO) {
        return{...state,userinfo:action.data};
    } else {
        return state
    }
}

//my_course
const initMyCourse ={mycourse:[]};
function myCourse(state=initMyCourse,action) {
    if (action.type === MY_COURSE) {
        return{...state,mycourse:action.data}
    }else {
        return state
    }
}

//all_course
const initAllcourse = {allCourse:[]};
function allCourse(state=initAllcourse,action) {
    if (action.type===ALL_COURSE){
        return{...state,allCourse:action.data}
    }else {
        return state
    }
}



export default combineReducers({
    user,news,userInfo,myCourse,allCourse
})

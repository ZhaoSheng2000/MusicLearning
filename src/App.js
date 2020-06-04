import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Student from './pages/student/index/student';
import Teacher from "./pages/teacher/index/teacher";
import Admin from "./pages/admin/index/admin";
import Login from "./pages/login/login";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/teacherPage' component={Teacher}/>
                <Route path={'/admin'} component={Admin}/>
                <Route path={'/login'} component={Login}/>
                <Route path='/' component={Student}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

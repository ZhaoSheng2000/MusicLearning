import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import Student from './pages/student/index/student'
import Teacher from "./pages/teacher/index/teacher";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/teacherPage' component={Teacher}/>
                <Route path='/' component={Student}/>
            </Switch>
        </HashRouter>
    );
}

export default App;

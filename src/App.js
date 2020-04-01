import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import Index from './pages/student/index/index'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={Index}/>
            </Switch>
        </HashRouter>
    );
}

export default App;

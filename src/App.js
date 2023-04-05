import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Navigation from "./Navigation/index.js";

const App = () => (
    <HashRouter>
        <Navigation/>
            <Switch>
                <Route path="/zadania/:id"><TaskPage /></Route>
                <Route path="/zadania"><TasksPage /></Route>
                <Route path="/autor"><AuthorPage /></Route>
                <Route path="/"><Redirect to="/zadania"></Redirect></Route>
            </Switch>
    </HashRouter>
);

export default App
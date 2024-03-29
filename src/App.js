import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/authorPage/index.js";
import Navigation from "./Navigation/index.js";

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path="/zadania/:id"><TaskPage /></Route>
            <Route path="/zadania"><TasksPage /></Route>
            <Route path="/autor"><AuthorPage /></Route>
            <Route path="/">
                <Redirect to="/zadania"></Redirect>
            </Route>
        </Switch>
    </HashRouter>
);

export default App
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
                <li>
                    <Link to="/autor">o autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id"><TaskPage /></Route>
                <Route path="/zadania"><TasksPage /></Route>
                <Route path="/autor"><AuthorPage /></Route>
                <Route path="/"><Redirect to="/zadania"></Redirect></Route>
            </Switch>
        </nav>
    </HashRouter>
)

export default App
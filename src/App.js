import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { StyledNavLink } from "./styled.js";
// import { StyledNavLink } from "./styled.js";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">o autorze</StyledNavLink>
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
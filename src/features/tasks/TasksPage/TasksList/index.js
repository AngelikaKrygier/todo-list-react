import { StyledLink } from "./styled";
import { List, Item, Content, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask, selectTaskByQuery } from "../../tasksSlice";
import { useQueryParametr } from "../searchQueryParameter";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
    const query = useQueryParametr(searchQueryParamName);
    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const { hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
}

export default TasksList;
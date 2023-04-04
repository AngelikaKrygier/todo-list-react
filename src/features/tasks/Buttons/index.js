import { StyledButtons, Button } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../TasksPage/tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pokaż przykładowe zadania
            </Button>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} className="buttons__button">
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}>
                        Ukończ wszystkie
                    </Button>
                </>
            )
            }
        </StyledButtons>
    )
};
export default Buttons;
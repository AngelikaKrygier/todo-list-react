import { StyledButtons, Button } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <StyledButtons>
                <Button onClick={() => dispatch(toggleHideDone())} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(setAllDone())}>
                    Ukończ wszystkie
                </Button>
            </StyledButtons>
        ))
};
export default Buttons;
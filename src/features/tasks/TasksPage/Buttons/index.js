import { StyledButtons } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    selectTasksState,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../../tasksSlice";
import BasicButton from "../../BasicButton";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {tasks.length > 0 && (
                <>
                    <BasicButton onClick={() => dispatch(toggleHideDone())} className="buttons__button">
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </BasicButton>
                    <BasicButton
                        disabled={tasks.every(({ done }) => done === true)}
                        onClick={() => dispatch(setAllDone())}>
                        Ukończ wszystkie
                    </BasicButton>
                </>
            )
            }
        </StyledButtons>
    )
};
export default Buttons;
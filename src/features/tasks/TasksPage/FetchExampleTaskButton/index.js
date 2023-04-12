import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Wrapper } from "./styled";
import { selectLoading } from "../../tasksSlice";
import BasicButton from "../../BasicButton";

const FetchExampleTaskButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading)

    return (
        <Wrapper>
            <BasicButton
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}>
                {
                    loading ? "Ładowanie ..." : "Pokaż przykładowe zadania"
                }
            </BasicButton>
        </Wrapper>

    )
};
export default FetchExampleTaskButton;
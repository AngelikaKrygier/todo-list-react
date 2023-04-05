import { useDispatch } from "react-redux";
import {fetchExampleTasks} from "../../tasksSlice";
import BasicButton from "../../BasicButton";
import { Wrapper } from "./styled";

const Button = () => {
    const dispatch = useDispatch();

    return (
            <Wrapper>
                <BasicButton onClick={() => dispatch(fetchExampleTasks())}>
                Pokaż przykładowe zadania
            </BasicButton>
            </Wrapper>
         
    )
};
export default Button;
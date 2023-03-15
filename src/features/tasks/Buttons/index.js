import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledButtons>
            <Button onClick={toggleHideDone} className="buttons__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}>
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
);
export default Buttons;
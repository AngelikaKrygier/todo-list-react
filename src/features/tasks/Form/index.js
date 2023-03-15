import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedTaskContent = newTaskContent.trim();

        if (trimedTaskContent === "") {
            return;
        }

        addNewTask(trimedTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                value={newTaskContent}
                autoFocus placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};
export default Form;

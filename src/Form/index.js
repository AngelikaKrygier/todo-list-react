import React, { useState } from "react";
import { StyledForm, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
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

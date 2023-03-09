import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 1px;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: rgb(0, 151, 151);
    color: white;
    border-radius: 1px;
    transition: 1s;
`;
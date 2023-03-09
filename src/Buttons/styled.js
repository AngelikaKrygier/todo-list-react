import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width:550px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-bottom: 15px;
}
`;

export const Button = styled.button`
    border: none;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 128, 128);
    font-size: 15px;
    cursor: pointer;
    transition: 1s;

        &:hover{
            color: rgba(0, 128, 128, 0.485);
        }

        &:disabled{
            color: rgb(166, 166, 166);
        }
`;



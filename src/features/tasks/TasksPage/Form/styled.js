import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 1px;
    transition: 2s;
    cursor: pointer;
`;
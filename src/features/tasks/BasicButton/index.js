import styled from "styled-components";

export default styled.button`
    border: none;
    background-color:${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    font-size: 15px;
    cursor: pointer;
    transition: 1s;

        &:hover{
            color: ${({ theme }) => theme.color.persianGreen};
        }

        &:disabled{
            color: ${({ theme }) => theme.color.sliver};
        }
`;
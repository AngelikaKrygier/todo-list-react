import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-bottom: 15px;
}
`;

export const Button = styled.button`
    border: none;
    background-color:${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    font-size: 15px;
    cursor: pointer;
    transition: 1s;

        &:hover{
            color: ${({ theme }) => theme.color.persianGree};
        }

        &:disabled{
            color: ${({ theme }) => theme.color.silver};
        }
`;



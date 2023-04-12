import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
text-decoration: none;
    ${({ done }) => done && css`
        text-decoration: line-through;`
    };
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${({theme})=> theme.color.teal};
`


export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 0;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};
        transition: 1s;

            &:hover{   
                background-color: ${({ theme }) => theme.color.emerald};
                cursor: pointer;
            };

            &:active{
                background-color: ${({ theme }) => theme.color.screamianGreen};
            };
    `};

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};
        transition: 1s;

            &:hover{
                background-color: ${({ theme }) => theme.color.torhRed};
                cursor: pointer;
            };

            &:active{
                background-color: ${({ theme }) => theme.color.bergundy};
            };
    `};
`;


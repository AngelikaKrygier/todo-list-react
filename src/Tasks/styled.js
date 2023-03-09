import styled, { css } from "styled-components";

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
    border-bottom: 1px solid rgb(189, 189, 189);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;`
    };
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: rgb(255, 255, 255);
    border: none;
    padding: 0;

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(41, 163, 41);
        transition: 1s;

            &:hover{   
                background-color: rgb(58, 212, 58);
                cursor: pointer;
            };

            &:active{
                background-color: rgb(65, 241, 65);
            };
    `};

    ${({ remove }) => remove && css`
        background-color: rgb(237, 18, 62);
        transition: 1s;

            &:hover{
                background-color: rgba(237, 18, 62, 0.774);
                cursor: pointer;
            };

            &:active{
                background-color: rgba(237, 18, 62, 0.711);
            };
    `};
`;


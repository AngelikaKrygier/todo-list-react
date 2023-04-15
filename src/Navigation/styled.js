import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationList = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.teal};
`

export const ListItem = styled.li`
padding: 20px;
list-style: none;
`

export const StyledNavLink = styled(NavLink)`
color: ${({ theme }) => theme.color.white};
text-decoration: none;

&.active {
        font-weight: 900;
    }

&:hover{
        border-bottom: 1px solid};

`
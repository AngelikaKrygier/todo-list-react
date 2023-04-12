import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-bottom: 15px;
}
`;



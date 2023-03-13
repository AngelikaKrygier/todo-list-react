import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin-top: 10px;
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.color.alto};
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};

         @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            grid-template-columns: 1fr;
        }
`;

export const Header = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;

export const MainPart = styled.div`
    padding: 20px;
`;
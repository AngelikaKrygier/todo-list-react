import { StyledSection, Body, Header, MainPart } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Body>
            <Header>{title}</Header>
            {extraHeaderContent}
        </Body>
        <MainPart>
            {body}
        </MainPart>
    </StyledSection>
);
export default Section;
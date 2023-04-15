import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header
            title="O autorze"
        />
        <Section
            title="Angelika Krygier"
            body={
                <div>
                    <p>Umysł techniczny z domieszką kreatywnej duszy.</p>
                    <p>Z wykształcenia <strong>inżynier biomedyczny</strong>
                        oraz magister <strong>zarządzania i inżynierii produkcji</strong>👩‍🎓.</p>
                    <p>Uwielbiam długie spacery, w wolnych chwilach jeżdżę na rowerze, biegam i czasem rysuję 😋.</p>
                </div>
            }
        />
    </Container>
);

export default AuthorPage;
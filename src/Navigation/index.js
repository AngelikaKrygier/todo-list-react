import { StyledNavLink } from "./styled"
import { NavigationList, ListItem } from "./styled"

const Navigation = ()=> (
 
    <nav>
        <NavigationList>
            <ListItem>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to="/autor">O Autorze</StyledNavLink>
            </ListItem>
        </NavigationList>
    </nav>
)

export default Navigation
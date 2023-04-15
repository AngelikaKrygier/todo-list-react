import { Wrapper } from "./styled";
import { useQueryParametr, useReplaceQueryparameter } from "../searchQueryParameter";
import searchQueryParamName from "../searchQueryParamName";
import Input from "../../Input";

const Search = () => {
    const query = useQueryParametr(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryparameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value:
                target.value.trim() !== ""
                    ? target.value
                    : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}>
            </Input>
        </Wrapper>
    )
};

export default Search
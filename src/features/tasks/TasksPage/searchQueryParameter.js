import { useHistory, useLocation } from "react-router-dom";

export const useQueryParametr = key => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key)
};

export const useReplaceQueryparameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`);
    };
};
import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Close from '@material-ui/icons/Close';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SEARCHSUGGESTION_PRODUCTS } from '../../graphql/queries';
import { useEffect } from 'react';
import { ApolloError } from '@apollo/client/errors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
    typography: {
        fontSize: 12
    },
    overrides: {
        MuiFab: {
            sizeSmall: {
                minHeight: 0,
                width: 25,
                height: 25,
                margin: 3
            },
        }
    }
});

interface suggestionProps {
    name: string
}

const SearchBar = (): JSX.Element => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Array<suggestionProps>>([]);
    const [suggestionBoxes, setSuggestionBoxes] = useState<Array<JSX.Element>>([]);
    const { data, error } = useQuery(GET_SEARCHSUGGESTION_PRODUCTS, {
        variables: {
            text: text,
        },
    });

    const getSearchSuggestions = (): void => {
        if (text !== "") {
            setSuggestions(data?.getSuggestedSearchProducts);

            error && new ApolloError(error);
        }
    }

    useEffect((): void => {
        getSearchSuggestions();
    }, [data]);

    useEffect((): void => {
        if (suggestions) {
            setSuggestionBoxes(
                suggestions.map((suggestion, i) => (
                    <span className="searchsuggestion" key={suggestion.name + i}>
                        <p>
                            {suggestion.name}
                        </p>
                    </span>
                ))
            );
        }
    }, [suggestions])

    const setSearch = (value): void => {
        value = value.toString();
        setSearchInput(value);
        setTimeout(() => {
            setText(value);
        }, 200);
    }

    const clearSearch = (): void => {
        setSearchInput("");
        setText("");
        setSuggestions([]);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="searchbar">
                {searchInput.length > 0
                    ? <div className="clearsearch_button" onClick={clearSearch}>&times;</div>
                    : <div></div>
                }
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={searchInput} />
                <Fab color="primary" className="search_button" size="small" aria-label="search">
                    <Search />
                </Fab>
                {suggestions &&
                    <div className="searchsuggestions_box">
                        {suggestionBoxes}
                    </div>
                }
            </div>
        </ThemeProvider>
    );
}

export default SearchBar;
import {Box, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import {useState} from "react";

const SearchBarContainer = styled(Box)`
    display: flex;
    justify-content: center;    
    align-items: center;
    margin-bottom: 3;
`

function SearchBar() {

    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const onSearch = () => navigate(`/questions?query=${encodeURIComponent(query)}`)

    return (
        <SearchBarContainer>
            <TextField
                id="outlined-basic"
                fullWidth
                label="Outlined"
                variant="outlined"
                multiline
                sx={{width: 500, height: 50, marginRight: 2}}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <SearchIcon
                onClick={() => onSearch()}
            />
        </SearchBarContainer>
    );
}

export default SearchBar;
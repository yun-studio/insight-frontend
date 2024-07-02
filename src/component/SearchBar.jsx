import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function SearchBar({paramQuery = ""}) {

    const navigate = useNavigate()
    const [query, setQuery] = useState(paramQuery)

    const onSearch = () => navigate(`/questions?query=${encodeURIComponent(query)}`)

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginY: 3}}
            onSubmit={(event) => {
                event.preventDefault()
                onSearch()
            }}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="질문을 검색하세요."
                inputProps={{'aria-label': 'searchQuery'}}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
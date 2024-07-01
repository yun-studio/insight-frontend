// 검색창 컴포넌트를 만들거야. TextField, SearchIcon을 사용해서 만들거야. 검색 아이콘을 누르면 react-query를 이용해서 /questions로 요청을 보내는데, 파라미터로 query 가 있어. 만들어줘.

import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";

function SearchBar({setQuestions}) {
    const [query, setQuery] = useState('')

    const questionListQuery = useQuery({
        queryKey: ['questions'],
        queryFn: () => axios.get(`${import.meta.env.VITE_SERVER_URL}/questions`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                query: query
            }
        }).then((res) => setQuestions(res.data.data.content))
    })

    return (
        <div>
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
                onClick={() => questionListQuery.refetch()}
            />
        </div>
    );
}

export default SearchBar;
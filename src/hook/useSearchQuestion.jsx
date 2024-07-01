import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function useSearchQuestion(searchQuery = "") {

    return useQuery({
        queryKey: ['questions', searchQuery],
        queryFn: () => axios.get(`${import.meta.env.VITE_SERVER_URL}/questions`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                query: searchQuery
            }
        })
    })
}

export default useSearchQuestion;
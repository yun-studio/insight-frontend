import QuestionCard from "./QuestionCard.jsx";
import {List, ListItem} from "@mui/material";

function QuestionList({questions}) {
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {
                    questions.map((question) => (
                        <ListItem
                            key={question.id}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <QuestionCard
                                data={question}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}

export default QuestionList;
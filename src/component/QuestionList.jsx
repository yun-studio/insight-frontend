import QuestionCard from "./QuestionCard.jsx";

function QuestionList({questions}) {
    return (
        <>
            {
                questions.map((question) => (
                    <QuestionCard key={question.id} data={question}/>
                ))
            }
        </>
    )
}

export default QuestionList;
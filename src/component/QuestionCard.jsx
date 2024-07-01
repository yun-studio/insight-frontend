import {Card, CardContent, Typography} from "@mui/material";

function QuestionCard({data}) {

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.content}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    답변수 : {data.answerCount}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    조회수 : {data.views}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default QuestionCard;
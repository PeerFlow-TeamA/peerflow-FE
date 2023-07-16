import { Box, Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {QuestionData, QuestionContent} from '../../interface/interface'
import getCurrentTime from "@/util/util";


function QuestionListItem({ index, content, id}: { index: number, content: QuestionContent, id: number}): JSX.Element {
  const dateSplit = content.createdAt.split('/');
  return (
    <Box>
      <Divider/>
    <ListItem key={index} disablePadding>
      <ListItemButton href={`/detail/${id}`}>
        <ListItemText primary={index + '. ' + content.title} secondary={content.category}/>
        <div>{getCurrentTime().split('/')[0] === dateSplit[0] ? dateSplit[1].substring(0, 5) : dateSplit[0].substring(5)}</div>
      </ListItemButton>
    </ListItem>
    </Box>
  );
}

export default function QuestionList({questionData}: {questionData: QuestionData}) {
  const contents = questionData.content;
  let index = questionData.pageable.pageNumber * questionData.size;

  return (
    <List>
      {contents?.map((content) => (
        <QuestionListItem key={content.questionId} index={++index} content={content} id={content.questionId}/>
        ))}
      <Divider />
      {questionData.numberOfElements < questionData.size && [...Array(questionData.size - questionData.numberOfElements)].map((_, index) => (
        <Box key={index + 3}>
          <ListItem sx={{ height: '60px'}}/>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
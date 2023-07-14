import { Box, Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {items} from '../../interface/interface'


function QuestionListItem({ index, title }: { index: number, title: string }): JSX.Element {
  return (
    <Box>
      <Divider/>
    <ListItem key={index} disablePadding>
      <ListItemButton href='/detail'>
        <ListItemText primary={index + '. ' + title} secondary={'내용'}/>
        <div>23.07.13</div>
      </ListItemButton>
    </ListItem>
    </Box>
  );
}

export default function QuestionList({items}: {items: items}) {
  return (
    <List>
      {items.map((item) => (
        <QuestionListItem key={item.index} index={item.index} title={item.title}/>
        ))}
      <Divider />
      {items.length < 10 && [...Array(10 - items.length)].map((_, index) => (
        <Box key={index + 3}>
          <ListItem sx={{ height: '60px'}}/>
          <Divider />
        </Box>
      ))}
    </List>
  );
}

import React from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

function QuestionListItem({ index, title }: { index: number, title: string }): JSX.Element {
  return (
    <Box>
      <Divider/>
    <ListItem key={index} disablePadding>
      <ListItemButton href='/detail'>
        <ListItemText primary={title}/>
      </ListItemButton>
    </ListItem>
    </Box>
  );
}

export default QuestionListItem;

//import * as React from 'react';
//import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select, { SelectChangeEvent } from '@mui/material/Select';

//export default function BasicSelect() {
//  const [age, setAge] = React.useState('');

//  const handleChange = (event: SelectChangeEvent) => {
//    setAge(event.target.value as string);
//  };

//  return (
//    <Box sx={{ minWidth: 120 }}>
//      <FormControl fullWidth>
//        <InputLabel id="demo-simple-select-label">Age</InputLabel>
//        <Select
//          labelId="demo-simple-select-label"
//          id="demo-simple-select"
//          value={age}
//          label="Age"
//          onChange={handleChange}
//        >
//          <MenuItem value={10}>Ten</MenuItem>
//          <MenuItem value={20}>Twenty</MenuItem>
//          <MenuItem value={30}>Thirty</MenuItem>
//        </Select>
//      </FormControl>
//    </Box>
//  );
//}
import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import React from 'react';

interface fetchFunction {
  () : void;
}

export default function SideBar({setCategory , fetchFunction} : {setCategory: React.Dispatch<React.SetStateAction<string>>, fetchFunction: fetchFunction}) {
  return (
    <Drawer
      sx={{
        flexShrink: 1,
        "&. MuiDrawer-paper": {
          boxSizing: "border-box"
        },
        flexGrow: 0,
      }}
      variant='permanent'
    >
      <List>
        {['all', 'minishell', 'ft_irc', 'minirt'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              text === 'all' ? setCategory('Peer flow') : setCategory(text)
              fetchFunction();
              }}>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
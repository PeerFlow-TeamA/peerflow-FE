import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import React from 'react';

export default function SideBar({setCategory} : {setCategory: React.Dispatch<React.SetStateAction<string>>}) {
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
              setCategory(text);
              }}>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
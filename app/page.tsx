'use client'
import { Container, CssBaseline,Pagination, Stack, Grid, Divider, TextField, Box, InputAdornment, IconButton, List, ListItem, ListItemButton, ListItemText, FormControl, InputLabel, Select, MenuItem, Drawer, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import QuestionListItem from '../components/QuestionListItem';
import React, { useEffect, useState } from 'react';
import './globals.css';
import { Css, PaddingTwoTone } from '@mui/icons-material';


type item = {
  index: number;
  title: string;
};

type items = item[];

function Header() {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
        <h2>Peer flow</h2>
      </Box>
    </header>
  )
}

//function SearchBox() {
//  return (
//    <Box>
//      <TextField
//        id="outlined-search"
//        type="search"
//        placeholder="검색"
//        size={'small'}
//        sx={{paddingTop: '20px'}}
//        InputProps={{
//          endAdornment: (
//            < InputAdornment position={'end'}>
//              <IconButton
//                onClick={() => {
//                }}
//              >
//                <SearchOutlinedIcon />
//              </IconButton>
//            </InputAdornment>
//          ),
//        }}
//      />
//      <Button href='/write'>글쓰기</Button>
//    </Box>
//  )
//}

function SearchBox() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <TextField
        id="outlined-search"
        type="search"
        placeholder="검색"
        size={'small'}
        sx={{marginTop: '15px'}}
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'}>
              <IconButton
                onClick={() => {
                }}
              >
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button href='/write' sx={{ marginLeft: '5px' }}>글쓰기</Button>
    </Box>
  )
}


function QuestionPagination({page, setPage}: {page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {
  
  const handlePageChange= (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <Pagination count={5} page={page} onChange={handlePageChange} showFirstButton showLastButton />
    </Box>
  );
}

function QuestionList({items}: {items: items}) {
  return (
    <List>
      {items.map((item) => (
        <QuestionListItem key={item.index} index={item.index} title={item.title}/>
        ))}
      <Divider />
      {items.length < 10 && [...Array(10 - items.length)].map((_, index) => (
        <Box key={index + 3}>
          <ListItem sx={{ height: '48px'}}/>
          <Divider />
        </Box>
      ))}
    </List>
  );
}

function SortSelectBox({sort, setSort}: {sort:string, setSort: React.Dispatch<React.SetStateAction<string>>}) {
  return (
      <FormControl>
        <Select
          value={sort}
          onChange={(e) => {setSort(e.target.value as string)}}>
            <MenuItem value={'latest'}>최신순</MenuItem>
            <MenuItem value={'view'}>조회순</MenuItem>
            <MenuItem value={'recommendation'}>추천순</MenuItem>
        </Select>
      </FormControl>
  );
}

function SideBar() {
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
            <ListItemButton>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('latest');

  const items: item[] = [
    {
      index: 1,
      title: "minishell",
    },
    {
      index: 2,
      title: "ft_irc",
    },
    {
      index: 3,
      title: "minirt",
    },
    {
      index: 4,
      title: 'react',
    },
    //{
    //  index: 5,
    //  title: 'react',
    //},
    //{
    //  index: 6,
    //  title: 'react',
    //},
    //{
    //  index: 7,
    //  title: 'react',
    //},
    //{
    //  index: 8,
    //  title: 'react',
    //},
    //{
    //  index: 9,
    //  title: 'react',
    //},
    //{
    //  index: 10,
    //  title: 'react',
    //},
    //{
    //  index: 11,
    //  title: 'react',
    //},
    //{
    //  index: 12,
    //  title: 'react',
    //},

  ];

  return (
    <Container sx={{
                  display: 'flex',
                  //flexDirection: 'column',
                }}>
      <CssBaseline />
      <div
        style={{
          flexGrow: 8,
          display: 'flex',
          flexDirection: 'column',
          marginRight: '10px',
          marginLeft: '80px'
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}>
          <SortSelectBox sort={sort} setSort={setSort}/>
          <SearchBox />
        </Box>
        <QuestionList items={items}/>
        <QuestionPagination setPage={setPage}page={page}/>
      </div>
      <SideBar/>
    </Container>
  );
}

'use client'
import { Container, Pagination, Stack, Grid, Divider, TextField, Box, InputAdornment, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import QuestionListItem from '../components/QuestionListItem';
import React, { Fragment } from 'react';
import './globals.css';


type item = {
  index: number;
  title: string;
}

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

function SearchBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <TextField
        id="outlined-search"
        type="search"
        placeholder="검색"
        size={'small'}
        InputProps={{
          endAdornment: (
            < InputAdornment position={'end'}>
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
    </Box>
  )
}

function QuestionPagination() {
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
      <Pagination count={5} showFirstButton showLastButton />
    </Box>
  );
}

export default function Home() {
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
    }
  ];

  return (
    <Container fixed>
      <Header />
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}>
        <SearchBox />
        {items.map((item) => {
          return (
            <QuestionListItem key={item.index} index={item.index} title={item.title} />
          );
        })}
        <QuestionPagination />
      </Stack>
    </Container>
  );
}

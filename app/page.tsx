'use client'
import { Container, CssBaseline} from '@mui/material';
import MainBoard from '@/components/MainPage/MainBoard';
import QuestionList from '../components/MainPage/QuestionList';
import QuestionTopBar from '@/components/MainPage/QuestionTopBar';
import QuestionSortSelectBox from '@/components/MainPage/QuestionSortSelectBox';
import QuestionSearchWriteBox from '@/components/MainPage/QuestionSearchWriteBox';
import QuestionPagination from '@/components/MainPage/QuestionPagination';
import SideBar from '@/components/MainPage/SideBar'
import React, { useState } from 'react';
import './globals.css';
import Header from '../components/Header';

export default function Home() {
  const [Category, setCategory] = useState<string>("Peer flow");
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('latest');

  const items = [
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
  ];

  return (
    <Container sx={{
                  display: 'flex',
                }}>
      <CssBaseline />
      <MainBoard>
        <Header head={Category}/>
        <QuestionTopBar>
          <QuestionSortSelectBox name={'sort select'} sort={sort} setSort={setSort}/>
          <QuestionSearchWriteBox />
        </QuestionTopBar>
        <QuestionList items={items}/>
        <QuestionPagination setPage={setPage}page={page}/>
      </MainBoard>
      <SideBar setCategory={setCategory}/>
    </Container>
  );
}

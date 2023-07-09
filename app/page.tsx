'use client'
import { Container, Pagination, Stack, Grid } from '@mui/material';
// import GnbContext from '../hooks/GnbContext';
import QuestionListItem from '../components/QuestionListItem';
import React, { Fragment } from 'react';

import Button from "@mui/material/Button";

// function ContainButton() {
//   return <Button variant="contained" size="small" >Hello World</Button>;
// }

export default function Home() {
  return (
    <>
      <Container sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
        <QuestionListItem index={1} title={"hi"} />
        <QuestionListItem index={2} title={"hi"} />
        <QuestionListItem index={3} title={'hi'} />
      </Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Button color='secondary' variant='text' size='small' disableElevation={true} disableRipple={true} >Hello world </Button>
        </Grid>
      </Grid >
      <Stack>
        <Pagination count={5} showFirstButton showLastButton />
      </Stack>
    </>
  );
}


  //   <Container sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
  //     <Stack justifyContent={'space-between'} direction="row" mt={1}>
  //       <TextField
  //         id="outlined-search"
  //         type="search"
  //         placeholder="제목 검색"
  //         size={'small'}
  //         onChange={(e) => {
  //           setTitle(e.target.value)
  //         }}
  //         value={title}
  //         InputProps={{
  //           endAdornment: (
  //             <InputAdornment position={'end'}>
  //               <IconButton
  //                 onClick={() => {
  //                   setCategory('search')
  //                   setSearch(true)
  //                 }}
  //               >
  //                 <SearchOutlinedIcon />
  //               </IconButton>
  //             </InputAdornment>
  //           ),
  //         }}
  //       />
  //       <DefaultDropdown setSort={setSort} sort={sort} />
  //     </Stack>
  //     {data?.content?.length ? (
  //       data?.content.map((item: Post) => {
  //         return <DefaultCard data={item} key={item.questionId} />
  //       })
  //     ) : (
  //       <Stack direction={'row'} justifyContent={'center'} width={'100%'}>
  //         <Box sx={{ marginTop: '4px' }}>게시글이 없습니다</Box>
  //       </Stack>
  //     )}
  //     <Stack justifyContent={'center'} direction="row" m={1}>
  //       <DefaultPagination
  //         count={data?.totalPages}
  //         page={page}
  //         setPage={setPage}
  //         category={category}
  //       />
  //     </Stack>
  //   </Container>
  // )
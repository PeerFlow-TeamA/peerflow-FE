import Header from "@/components/Header";
import { TextField, Button, Select, MenuItem, Box, Container, FormControl, InputLabel, Card } from "@mui/material";
import React from 'react';

export default function WritePage() {
  const [sort, setSort] = React.useState('minishell');

  return (
    <Container maxWidth="md">
      <Header head={'게시글 작성'} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextField sx={{ mt: '10px', mr: '10px', maxWidth: '550px' }} label="Title" required autoFocus fullWidth />
        <FormControl sx={{ mt: '10px', minWidth: '120px' }}>
          <InputLabel id="Category-select-label">Category</InputLabel>
          <Select
            labelId="Category-select-label"
            id="Category-select"
            value={sort}
            label="Category"
            onChange={(e) => { setSort(e.target.value as string) }}
          >
            <MenuItem value={'minishell'}>minishell</MenuItem>
            <MenuItem value={'ft_irc'}>ft_irc</MenuItem>
            <MenuItem value={'minirt'}>minirt</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TextField sx={{ mt: '10px', mr: '10px' }} label="Nick Name" required />
        <TextField sx={{ mt: '10px' }} type="password" label="Password" autoComplete="off" required />
      </Box>
      <TextField sx={{ mt: '10px' }} variant="outlined" multiline rows={20} label="Content" required fullWidth />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
        <Button variant="outlined" sx={{ marginTop: '10px', marginRight: '10px' }} type="submit">작성</Button>
        <Button variant="outlined" href='/' sx={{ marginTop: '10px' }} type="submit">취소</Button>
      </Box>
    </Container>
  );
}
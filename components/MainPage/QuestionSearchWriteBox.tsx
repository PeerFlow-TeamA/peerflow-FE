import { Box, TextField, Button, InputAdornment, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function QuestionSearchWriteBox() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <TextField
        id="outlined-search"
        type="search"
        placeholder="검색"
        size={'small'}
        sx={{ marginTop: '15px' }}
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
      <Button href='/write' sx={{ marginLeft: '5px' }} variant='outlined'>글쓰기</Button>
    </Box>
  )
}
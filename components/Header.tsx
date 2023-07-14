import {Box} from '@mui/material';

export default function Header({head} : {head: string}) {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
        <h2>{head}</h2>
      </Box>
    </header>
  )
}
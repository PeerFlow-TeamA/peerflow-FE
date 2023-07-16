import { Pagination } from "@mui/material";
import React from "react";


export default function QuestionPagination({page, setPage}: {page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {
  const handlePageChange= (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
  
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '30px',
      }}>
      <Pagination count={5} page={page} onChange={handlePageChange} showFirstButton showLastButton />
    </footer>
  );
}
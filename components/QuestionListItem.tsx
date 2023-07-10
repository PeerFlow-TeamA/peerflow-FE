
import React from 'react';
import { Stack, Link } from "@mui/material";

function QuestionListItem({ index, title }: { index: number, title: string }): JSX.Element {
  return (
    <Link href='/detail' underline="none" color="none">
      <Stack spacing={3} direction="row" mt={3}>
        <div>{index}</div>
        <div>{title}</div>
      </Stack>
    </Link>

  );
}

export default QuestionListItem;
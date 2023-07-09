import { Fragment } from "react";
import React from 'react';
import { Stack } from "@mui/material";

function QuestionListItem({ index, title }: { index: number, title: string }): JSX.Element {
  return (
    <Stack spacing={2} direction="row" mt={1}>
      <div>{index}</div>
      <div>{title}</div>
    </Stack>
  );
}

export default QuestionListItem;
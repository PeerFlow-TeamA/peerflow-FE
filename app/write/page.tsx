'use client';
import Header from "@/components/Header";
import {Button} from "@mui/material";
import getCurrentTime from "@/util/util";

// getCurrent

function WritePage() {

  return (
    <div>
      <Header head={'게시글 작성'}/>
      <form>
        <input />
      </form>
      <form />
      <form />
      <form />
      <form />
      <Button href="/" onClick={() => {
        alert(getCurrentTime());
      }}>작성</Button>
    </div>
  )
}

export default WritePage;
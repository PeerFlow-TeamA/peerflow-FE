
//네임이슈

import { FormControl, Select, MenuItem } from "@mui/material";

export default function QuestionSortSelectBox({name, sort, setSort}: {name: string, sort: string, setSort: React.Dispatch<React.SetStateAction<string>>}) {
  return (
      <FormControl>
        <Select
          id={name}
          value={sort}
          onChange={(e) => {setSort(e.target.value as string)}}>
            <MenuItem id='latest-menu' value={'latest'}>최신순</MenuItem>
            <MenuItem id='view-menu' value={'view'}>조회순</MenuItem>
            <MenuItem id='recommendation-menu' value={'recommendation'}>추천순</MenuItem>
        </Select>
      </FormControl>
  );
}
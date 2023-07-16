
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

interface fetchFunction {
  () : void;
}

export default function QuestionSortSelectBox({ name, sort, setSort, fetchFunction }: { name: string, sort: string, setSort: React.Dispatch<React.SetStateAction<string>>, fetchFunction: fetchFunction }) {
  return (
    <FormControl >
      <InputLabel id="sort-select-label">Sort</InputLabel>
      <Select
        labelId="sort-select-label"
        id={name}
        value={sort}
        onChange={(e) => {
          setSort(e.target.value as string)
          fetchFunction(); }}
        label="Sort"
      >
        <MenuItem value={'latest'}>최신순</MenuItem>
        <MenuItem value={'view'}>조회순</MenuItem>
        <MenuItem value={'recommendation'}>추천순</MenuItem>
      </Select>
    </FormControl>
  );
}
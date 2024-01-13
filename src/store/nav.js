import { createSlice } from "@reduxjs/toolkit";

const navs = [
  {
    chapter: "01",
    name: "state",
  },
  {
    chapter: "02",
    name: "function",
  },
  {
    chapter: "03",
    name: "props",
  },
  {
    chapter: "04",
    name: "lifecircle",
  },
  {
    chapter: "05",
    name: "slot",
  },
  {
    chapter: "06",
    name: "computed",
  },
  {
    chapter: "07",
    name: "watch",
  },
  {
    chapter: "08",
    name: "if",
  },
  {
    chapter: "09",
    name: "for",
  },
  {
    chapter: "10",
    name: "ref",
  },
  {
    chapter: "11",
    name: "style",
  },
  {
    chapter: "12",
    name: "context",
  },
];

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    value: navs
  }
})

export default navSlice.reducer;
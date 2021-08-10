import { useState } from "react";

export function usePagination() {
  const [first, setFirst] = useState<number>(0);
  const [offset, setOffset] = useState<number>(12);
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  return {
    first,
    setFirst,
    offset,
    setOffset,
    pageNum,
    setPageNum,
    count,
    setCount,
    pageCount,
    setPageCount,
  };
}

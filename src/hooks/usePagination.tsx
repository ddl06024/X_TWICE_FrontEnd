import { useState } from "react";

export function usePagination() {
  const [first, setFirst] = useState<number>(0);
  const [last, setLast] = useState<number>(4);

  return {
    first,
    setFirst,
    last,
    setLast,
  };
}

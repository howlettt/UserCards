import { useState } from "react";

export interface UsePagedDataProps<T> {
  items: T[];
  itemsPerPage: number;
}

export interface UsePagedData<T> {
  currentPage: number;
  filterdItems: T[];
  numberOfPages: number;
  setCurrentPage: (page: number) => void;
}

export default function usePagedData<T>(
  props: UsePagedDataProps<T>,
): UsePagedData<T> {
  const [page, setPage] = useState(0);

  const numberOfPages = Math.ceil(props.items.length / props.itemsPerPage);
  const filterdItems = props.items.slice(
    page * props.itemsPerPage,
    page * props.itemsPerPage + props.itemsPerPage,
  );

  return {
    currentPage: page,
    filterdItems: filterdItems,
    numberOfPages: numberOfPages,
    setCurrentPage: setPage,
  };
}

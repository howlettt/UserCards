import { expect, test, vi } from "vitest";
import usePagedData from "./usePagedData";

vi.mock("react", () => {
  return {
    useState: (value: unknown) => [
      value,
      () => {
        // placeholder
      },
    ],
  };
});

test("single item per page", () => {
  let result = usePagedData({ items: [1, 2], itemsPerPage: 1 });

  expect(result.filterdItems.length).toBe(1);
  expect(result.filterdItems[0]).toBe(1);
  expect(result.numberOfPages).toBe(2);

  result = usePagedData({ initialPage: 1, items: [1, 2], itemsPerPage: 1 });

  expect(result.filterdItems.length).toBe(1);
  expect(result.filterdItems[0]).toBe(2);
  expect(result.numberOfPages).toBe(2);
});

test("single page", () => {
  const result = usePagedData({ items: [1, 2], itemsPerPage: 5 });

  expect(result.filterdItems.length).toBe(2);
  expect(result.numberOfPages).toBe(1);
});

test("partial last page", () => {
  let result = usePagedData({ items: [1, 2, 3], itemsPerPage: 2 });

  expect(result.filterdItems.length).toBe(2);
  expect(result.numberOfPages).toBe(2);

  result = usePagedData({ initialPage: 1, items: [1, 2, 3], itemsPerPage: 2 });

  expect(result.filterdItems.length).toBe(1);
  expect(result.numberOfPages).toBe(2);
});

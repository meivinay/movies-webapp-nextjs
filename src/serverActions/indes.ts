"use server";
import { searchCollection } from "@/api";

export const getSearchResults = (value: string) => {
  return searchCollection(value);
};

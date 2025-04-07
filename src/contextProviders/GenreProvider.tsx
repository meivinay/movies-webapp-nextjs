"use client";

import { createContext } from "react";

export const GenreContext = createContext({});

export default function GenreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenreContext.Provider value="dark">{children}</GenreContext.Provider>;
}

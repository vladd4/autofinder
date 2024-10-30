import React from "react";

import Header from "@/components/Header/Header";
import AlertItem from "@/components/Alert";

export const metadata = {
  title: "AutoFinderX | Пошук автомобілів",
  description: "AutoFinderX | Пошук автомобілів",
};

type SearchProps = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: SearchProps) {
  return (
    <>
      <Header />
      <AlertItem text="Успішно додано до збережених!" />
      {children}
    </>
  );
}

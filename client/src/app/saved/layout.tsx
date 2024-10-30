import React from "react";

import Header from "@/components/Header/Header";

export const metadata = {
  title: "AutoFinderX | Збережні автомобілі",
  description: "AutoFinderX | Збережні автомобілі",
};

type ProfileProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

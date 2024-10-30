import React from "react";

import Header from "@/components/Header/Header";
import InputAlert from "@/components/InputAlert/InputAlert";
import ConfirmAlert from "@/components/ConfirmAlert/ConfirmAlert";
import EditAlert from "@/components/EditAlert/EditAlert";

export const metadata = {
  title: "AutoFinderX | Профіль користувача",
  description: "AutoFinderX | Профіль користувача",
};

type ProfileProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileProps) {
  return (
    <>
      <Header />
      <ConfirmAlert />
      <EditAlert />
      <InputAlert />
      {children}
    </>
  );
}

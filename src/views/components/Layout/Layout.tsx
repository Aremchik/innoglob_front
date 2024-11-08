import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

import React from "react";
import Sidebar from "./Sidebar";

interface iLayout {
  children: React.ReactNode;
}

const Layout: React.FC<iLayout> = (props) => {
  return (
    <>
      <Sidebar>{props.children}</Sidebar>
    </>
  );
};

export default Layout;

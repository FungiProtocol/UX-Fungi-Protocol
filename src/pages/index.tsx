import Home from "@/components/Sections/Home";
import SideBar from "@/components/Layout/SideBar";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <SideBar page={<Home />} />
    </div>
  );
}

import SideBar from "@/components/Layout/SideBar";
import ErrorPage from "@/components/Sections/ErrorPage";
import useWindowSize from "@/hooks/useWindowSize";
import React from "react";

export default function FundPage() {
  const size = useWindowSize();

  if (size.width && size.width < 1024) {
    return <ErrorPage />;
  }
  return (
    <div>
      <SideBar page={<div>FundPage</div>} />
    </div>
  );
}

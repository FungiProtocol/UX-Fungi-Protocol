import { fundType } from "@/types/Types";
import React from "react";
import FundsTableCard from "../Cards/FundsTableCard";

type FundsTableProps = {
  funds: fundType[];
  startIndex: number;
  endIndex: number;
};

export default function FundsTable({
  funds,
  startIndex,
  endIndex,
}: FundsTableProps) {
  console.log(funds);
  return (
    <div className="mt-[20px] w-full h-[574px] pt-[23px] px-[20px] bg-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 pb-[26px] text-xl font-medium">
        <div className="col-span-2 ml-[100px]">Name</div>{" "}
        <div className="text-center">AUM</div>{" "}
        <div className="text-center">Networks</div>{" "}
        <div className="text-center">Members</div>
        <div className="col-span-2 ml-[40px]">All Time</div>
      </div>{" "}
      {funds
        .slice(startIndex, endIndex)
        .map((fund: fundType, index: number) => (
          <FundsTableCard fund={fund} key={index} />
        ))}
    </div>
  );
}

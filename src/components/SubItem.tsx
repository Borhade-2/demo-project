import React from "react";
import IconRenderer from "./IconRenderer.tsx";
import type { SubItemType } from "../components/types.tsx";

type SubItemProps = {
  subItem: SubItemType;
};

export default function SubItem({ subItem }: SubItemProps) {
  return (
    <div className="mb-1">
      <div className="flex items-start">
        <div className="w-10 h-10 rounded mr-4 mt-1 flex-shrink-0 bg-[#FF0000]" />
        <div>
          <h2 className="text-lg font-semibold">{subItem.title}</h2>
          <p className="text-gray-700">
            {subItem.mention && (
              <span className="text-blue-600 underline cursor-pointer mr-1">
                {subItem.mention}
              </span>
            )}
            {subItem.content}
          </p>
          {subItem.icons && <IconRenderer icons={subItem.icons} />}
        </div>
      </div>
      {subItem.id !== 2 && <div className="border-b border-[#F27379] mt-4 mb-2" />}
    </div>
  );
}

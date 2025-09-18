import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faSquare } from "@fortawesome/free-solid-svg-icons";

// Define the type for icons prop
type IconRendererProps = {
  icons: ("diamond" | "square")[];
};

export default function IconRenderer({ icons }: IconRendererProps) {
  return (
    <div className="flex mt-2 gap-2">
      {icons.map((iconName, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#E6E6F2]"
        >
          {iconName === "diamond" && (
            <FontAwesomeIcon icon={faDiamond} className="text-[#F27379] text-sm" />
          )}
          {iconName === "square" && (
            <FontAwesomeIcon icon={faSquare} className="text-[#F27379] text-sm" />
          )}
        </div>
      ))}
    </div>
  );
}

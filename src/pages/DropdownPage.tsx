import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropdownItem from "../components/DropdownItem.tsx";
import type { SubItemType, DropdownItemType } from "../components/types.tsx";

export default function RubberDropdown() {
  const dropdownData: DropdownItemType[] = [
    {
      id: 1,
      title: "Cool guy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci, blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet, tempus lectus ac, faucibus quam. Praesent euismod congue cursus. Phasellus tincidunt sem vitae neque egestas, ut egestas justo venenatis.",
      data: [
        { id: 1, title: "Someone", content: "Lorem ipsum" },
        { id: 2, title: "Someone else", content: "Lorem ipsum", icons: ["diamond" as const] },
        {
          id: 3,
          title: "Who else",
          mention: "@Someone else",
          content: "Lorem Indeed!",
          icons: ["diamond" as const],
        },
        { id: 4, title: "Someone else", content: "Cool!", icons: ["diamond", "square"] },
      ],
    },
  ];

  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const [bounceTrigger, setBounceTrigger] = useState<boolean>(false);

  const handleToggle = (itemId: number) => {
    if (expandedItemId === itemId) {
      setBounceTrigger(true);
      setTimeout(() => setBounceTrigger(false), 600);
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-black">
      <div className="bg-white p-16 rounded-3xl shadow-lg h-[90vh] w-[120vh] overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="bg-white h-[130vh] w-full max-w-2xl">
          <h1 className="text-7xl text-black font-bold mb-2">Prototype</h1>
          <p className="text-black text-[28px] mb-4">Collapsible component</p>

          {dropdownData.map((item) => (
            <DropdownItem
              key={item.id}
              item={item}
              expandedItemId={expandedItemId}
              bounceTrigger={bounceTrigger}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import SubItem from "./SubItem.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faSquare } from "@fortawesome/free-solid-svg-icons";
import type { SubItemType, DropdownItemType } from "../components/types.tsx";

type DropdownItemProps = {
  item: DropdownItemType;
  expandedItemId: number | null;
  bounceTrigger: boolean;
  handleToggle: (id: number) => void;
};

const containerVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      staggerDirection: -1, 
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.15,
      staggerDirection: 1, 
    },
  },
};

const boxVariants: Variants = {
  idle: { y: 0 },
  bounce: {
    y: [0, -15, 0, -7, 0],
    transition: { duration: 0.6, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const subItemVariants: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
};

export default function DropdownItem({
  item,
  expandedItemId,
  bounceTrigger,
  handleToggle,
}: DropdownItemProps) {
  return (
   <div className="border-2 border-red-500 rounded-2xl mb-2 mt-10 transition-colors duration-300 bg-[#CECED9]">
      {/* Header */}
      <div className="flex items-start p-4">
        <div
          className="w-10 h-10 rounded mr-4 flex-shrink-0 bg-[#FF0000]"
        />
        <div>
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-black text-sm font-normal">{item.content}</p>

          <div className="flex mt-2 gap-4">
            <motion.div
              className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#E6E6F2]"
              animate={bounceTrigger ? "bounce" : "idle"}
              variants={boxVariants}
            >
              <FontAwesomeIcon
                icon={faDiamond}
                className="text-[#F27379] text-sm"
              />
            </motion.div>
            <motion.div
              className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#E6E6F2]"
              animate={bounceTrigger ? "bounce" : "idle"}
              variants={boxVariants}
            >
              <FontAwesomeIcon
                icon={faSquare}
                className="text-[#F27379] text-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      <AnimatePresence initial={false}>
        {expandedItemId === item.id && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="overflow-hidden"
          >
            <div className="px-4 pt-0 pb-4">
              <div className="border-b border-[#F27379] mb-2" />

              {/* Animate SubItems */}
              {item.data.map((subItem) => (
                <motion.div
                  key={subItem.id}
                  variants={subItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <SubItem subItem={subItem} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Open/Close Button */}
      <div
        className="flex justify-center items-center text-red-500 font-semibold text-sm cursor-pointer"
        onClick={() => handleToggle(item.id)}
      >
        {expandedItemId === item.id ? (
          <span className="underline mb-2">Close</span>
        ) : (
          <span className="underline mb-2">Open</span>
        )}
      </div>
    </div>
  );
}

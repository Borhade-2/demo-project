// src/types.ts
export type Theme = "light" | "dark";
export type IconType = "diamond" | "square";

export type SubItemType = {
  id: number;
  title: string;
  content: string;
  mention?: string;
  icons?: IconType[];
};

export type DropdownItemType = {
  id: number;
  title: string;
  content: string;
  data: SubItemType[];
};

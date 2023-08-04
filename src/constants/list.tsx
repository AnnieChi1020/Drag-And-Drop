import { nanoid } from "nanoid";

export interface ItemProps {
  id: string;
  text: string;
  color: string;
}

export const list: ItemProps[] = [
  { id: nanoid(), text: "Item 1", color: "#F65F55" },
  { id: nanoid(), text: "Item 2", color: "#FFA940" },
  { id: nanoid(), text: "Item 3", color: "#FFC53D" },
  { id: nanoid(), text: "Item 4", color: "#FADB14" },
  { id: nanoid(), text: "Item 5", color: "#4ECC80" },
  { id: nanoid(), text: "Item 6", color: "#05ADA2" },
  { id: nanoid(), text: "Item 7", color: "#449DFC" },
  { id: nanoid(), text: "Item 8", color: "#9254DE" },
];

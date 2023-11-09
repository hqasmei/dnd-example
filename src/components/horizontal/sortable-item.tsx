import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Item } from "./item";

interface SortableItemProps {
  id: string;
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item
      id={props.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="p-4 "
    >
      <button
        className={`py-2 px-1 rounded absolute top-2 right-2 hover:bg-zinc-100 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        {...listeners}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 15 15"
          className="text-[#919eab]"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.5 4.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Zm4 0a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25ZM10.625 7.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0ZM5.5 8.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Zm5.125 2.875a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0ZM5.5 12.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Item>
  );
}

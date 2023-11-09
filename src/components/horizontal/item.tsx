import React, { forwardRef, HTMLProps } from "react";

export const Item = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, id, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className="p-4 shadow rounded bg-white w-full h-24 relative cursor-auto">
        {children}
        {id}
      </div>
    );
  }
);

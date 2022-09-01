import React from "react";

export const Canvas = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div style={{ height: "100%" }} ref={ref}></div>;
});

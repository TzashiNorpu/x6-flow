import React from "react";

export const Canvas = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div {...props} style={{ height: "100%" }} ref={ref}>
      Hello
    </div>
  );
});

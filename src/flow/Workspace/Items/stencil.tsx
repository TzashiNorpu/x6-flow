import { useEffect } from "react";
// TODO
export const MyStencil = () => {
  useEffect(() => {
    MyStencil();
  }, []);
  return <div>test</div>;
};

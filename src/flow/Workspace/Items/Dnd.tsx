import { Addon, Graph } from "@antv/x6";
const { Dnd } = Addon;
export const CreateMyDnd = (graph: Graph) => {
  return new Dnd({
    target: graph,
    scaled: false,
    animation: true,
  });
};

export const startDrag = (graph: Graph) => {
  return (dnd: Addon.Dnd) => {
    return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.currentTarget;
      const node = graph.createNode({
        width: 92,
        height: 96,
        shape: "html",
        html: () => {
          const wrap = document.createElement("img");
          wrap.src = target.getAttribute("src") || "";
          return wrap;
        },
        ports: {
          items: [
            { group: "l", id: "l" },
            { group: "r", id: "r" },
            { group: "t", id: "t" },
            { group: "b", id: "b" },
          ],
          groups: {
            l: {
              position: { name: "left" },
              zIndex: 1,
            },
            r: {
              position: { name: "right" },
              zIndex: 1,
            },
            t: {
              position: { name: "top" },
              zIndex: 1,
            },
            b: {
              position: { name: "bottom" },
              zIndex: 1,
            },
          },
        },
      });
      dnd.start(node, e.nativeEvent as any);
    };
  };
};

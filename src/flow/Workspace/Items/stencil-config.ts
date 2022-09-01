import { Addon, Graph } from "@antv/x6";
export const CreateMyStencil = (g: Graph) => {
  return new Addon.Stencil({
    target: g,
    title: "流程节点",
    stencilGraphWidth: 600,
    stencilGraphHeight: 400,
    collapsable: true,
    groups: [
      {
        title: "基础流程图",
        name: "group1",
      },
      {
        title: "系统设计图",
        name: "group2",
        graphHeight: 250,
        layoutOptions: {
          rowHeight: 70,
        },
      },
    ],
    layoutOptions: {
      columns: 1,
    },
  });
};

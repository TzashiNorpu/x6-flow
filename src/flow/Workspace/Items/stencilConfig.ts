import { Addon, Graph } from "@antv/x6";

export const MyStencil = ({ g }: { g: Graph }) => {
  return new Addon.Stencil({
    title: "流程图",
    target: g,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
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
      columns: 2,
      columnWidth: 80,
      rowHeight: 55,
    },
  });
};

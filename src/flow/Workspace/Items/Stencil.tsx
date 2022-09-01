import { Graph } from "@antv/x6";
import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useEffect } from "react";
import { CreateMyStencil } from "./stencil-config";

export const MyStencil = ({ graph }: { graph: Graph | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!graph) return;
    const myStencil = CreateMyStencil(graph);
    console.log("Stencil", myStencil);
    ref.current?.append(myStencil.container);
    const imageShapes = [
      {
        label: "Client",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg",
      },
      {
        label: "Http",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg",
      },
      {
        label: "Api",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg",
      },
      {
        label: "Sql",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg",
      },
      {
        label: "Clound",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg",
      },
      {
        label: "Mq",
        image:
          "https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg",
      },
    ];
    const imageNodes = imageShapes.map((item) =>
      graph.createNode({
        shape: "custom-image",
        label: item.label,
        attrs: {
          image: {
            "xlink:href": item.image,
          },
        },
      })
    );
    myStencil.load(imageNodes, "group2");
  }, [graph]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      ref={ref}
    ></div>
  );
};

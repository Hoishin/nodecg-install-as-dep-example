import type NodeCG from "nodecg/types";

export = (nodecg: NodeCG.ServerAPI) => {
  const hogeRep = nodecg.Replicant("hoge");
  hogeRep.on("change", (newVal) => {
    console.log("hoge changed:", newVal);
  });
};

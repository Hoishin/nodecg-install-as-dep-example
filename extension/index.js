"use strict";
module.exports = (nodecg) => {
    const hogeRep = nodecg.Replicant("hoge");
    hogeRep.on("change", (newVal) => {
        console.log("hoge changed:", newVal);
    });
};

import oxinion from "oxinion";

oxinion.startScan();
oxinion.onDiscover((address) => {
  console.log(`Discovered device with address: ${address}`);
});

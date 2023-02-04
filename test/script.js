import oxinion from "oxinion";

oxinion.startScan();
oxinion.onDiscover((address) => {
  console.log(`Discovered device with address: ${address}`);
});

oxinion.megaphoneForCoupon("Save 20% on all items!");

const paymentData = {
  uuid: "your_payment_service_uuid",
  data: "your_payment_data",
};

oxinion
  .scanAndPay(paymentData)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

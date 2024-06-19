import noble from "noble";

export function megaphoneForCoupon(couponMessage) {
  console.log(`Starting to broadcast coupon message: ${couponMessage}`);

  noble.startAdvertising(couponMessage, () => {
    console.log(`Coupon message "${couponMessage}" is now being broadcasted.`);
  });
}

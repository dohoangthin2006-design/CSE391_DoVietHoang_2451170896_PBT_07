function restaurantBill(items, isWednesday, hasTip) {
  let subtotal = 0;

  for (let item of items) {
    subtotal += item.price * item.quantity;
  }

  let discount = 0;

  if (subtotal > 1000000) {
    discount = subtotal * 0.15;
  } else if (subtotal > 500000) {
    discount = subtotal * 0.1;
  }

  if (isWednesday) {
    discount += subtotal * 0.05;
  }

  let afterDiscount = subtotal - discount;

  let vat = afterDiscount * 0.08;

  let tip = hasTip ? afterDiscount * 0.05 : 0;

  let total = afterDiscount + vat + tip;

  console.log("===== HÓA ĐƠN =====");

  items.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} x${item.quantity} = ${
        item.price * item.quantity
      }đ`,
    );
  });

  console.log("Tổng:", subtotal.toLocaleString(), "đ");
  console.log("Giảm giá:", discount.toLocaleString(), "đ");
  console.log("VAT:", vat.toLocaleString(), "đ");
  console.log("Tip:", tip.toLocaleString(), "đ");
  console.log("Thanh toán:", total.toLocaleString(), "đ");
}

restaurantBill(
  [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
  ],
  false,
  true,
);
